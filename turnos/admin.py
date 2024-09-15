from django.contrib import admin
from .models import Turno, Profesional, Especialidad

admin.site.register(Turno)
@admin.register(Profesional)
class ProfesionalAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'especialidad')

@admin.register(Especialidad)
class EspecialidadAdmin(admin.ModelAdmin):
    list_display = ('id',)