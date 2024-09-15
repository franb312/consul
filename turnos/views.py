from rest_framework import viewsets, permissions, status, serializers
from .models import Turno, Especialidad
from .serializers import TurnoSerializer, EspecialidadSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.views import APIView
import json
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
import datetime


class TurnoViewSet(viewsets.ModelViewSet):
    queryset = Turno.objects.all()
    serializer_class = TurnoSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        fecha = serializer.validated_data.get('fecha')
        hora = serializer.validated_data.get('hora')
        profesional = serializer.validated_data.get('profesional')
          # 1. Validar que la hora esté en el rango permitido (8:00 - 20:00)
        hora_minima = datetime.time(8, 0)
        hora_maxima = datetime.time(20, 0)
        if not (hora_minima <= hora <= hora_maxima):
            raise serializers.ValidationError("El turno debe estar entre las 8:00 y las 20:00.")

        # 2. Validar que sea un día de lunes a viernes
        if fecha.weekday() >= 5:  # 5 es sábado, 6 es domingo
            raise serializers.ValidationError("Solo se pueden reservar turnos de lunes a viernes.")

        # 3. Validar que no sea una fecha pasada
        if fecha < datetime.date.today():
            raise serializers.ValidationError("No se pueden reservar turnos en fechas pasadas.")

        turnos_existentes = Turno.objects.filter(fecha=fecha, hora=hora, profesional=profesional).count()
        if turnos_existentes >= 2:
            raise serializers.ValidationError("Ya existen 2 turnos para esta hora y profesional.")
        
        serializer.save()
@api_view(['GET'])
def especialidades_list(request):
    especialidades = Especialidad.objects.all()
    serializer = EspecialidadSerializer(especialidades, many=True)
    return Response(serializer.data)

class RegisterView(APIView):
    def post(self, request):
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        if not username or not password:
            return Response({'message': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)
        User.objects.create_user(username=username, password=password)
        return Response({'message': 'User registered'}, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    def post(self, request):
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        return Response({'message': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({'message': 'Logged out'}, status=status.HTTP_200_OK)