import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    //  limpiar tokens de autenticación si es necesario
    navigate('/ingresar');
  };
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };

  const contentStyle: React.CSSProperties = {
    marginTop: '20px',
  };

  const ulStyle: React.CSSProperties = {
    listStyleType: 'none',
    padding: 0,
  };

  const liStyle: React.CSSProperties = {
    margin: '10px 0',
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#007bff',
  };

  const linkHoverStyle: React.CSSProperties = {
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <h1>Bienvenido a Kinel</h1>
      <div style={contentStyle}>
        <p>Accede a las diferentes áreas:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a href="/perfil" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>Perfil</a>
          </li>
          <li style={liStyle}>
            <a href="/turnos" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>Mis Turnos</a>
          </li>
          <li style={liStyle}>
            <a href="/servicios" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>Áreas del Consultorio</a>
          </li>
        </ul>
      </div>
      <button onClick={handleLogout} className="btn btn-primary">Cerrar Sesión</button>
    </div>
  );
}

export default Dashboard;
