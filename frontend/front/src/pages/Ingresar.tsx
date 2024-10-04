import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Ingresar() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginData = {
      username: email,
      password: password,
    };

    console.log('Login Data:', loginData);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      console.log('Login exitoso:', data);

      localStorage.setItem('authToken', data.token);
      
      navigate('/dashboard');

    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow-lg" style={{ width: '30rem', minHeight: '20rem' }}>
        <div className="card-body">
          <h3 className='title text-center mb-4'>Ingresar</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 form-check d-flex justify-content-between">
              <div>
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Recordarme</label>
              </div>
              <a href="/recuperar-contrasena" className="text-decoration-none">Olvidé mi contraseña</a>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-lg">Ingresar</button>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <a href="/registro" className="text-decoration-none">Primera vez? Registrarse</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Ingresar;
