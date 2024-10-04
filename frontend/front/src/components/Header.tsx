import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; 

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    // Verificar si hay token
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);  // Si hay token=autenticado
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Eliminamos el token al hacer logout
    setIsLoggedIn(false); // Actualizamos el estado
    navigate('/'); // Redirigimos al inicio
  };

  const handleNavigation = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <nav id="navbar-example2" className="navbar navbar-expand-lg bg-body-tertiary px-3 mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#Inicio" onClick={() => handleNavigation('Inicio')}>KINEL</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" onClick={() => handleNavigation('Inicio')}>Inicio</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Áreas
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" onClick={() => handleNavigation('Kinesiologia')}>Kinesiología</a></li>
                  <li><a className="dropdown-item" onClick={() => handleNavigation('Nutricion')}>Nutrición</a></li>
                  <li><a className="dropdown-item" onClick={() => handleNavigation('Psicopedagogia')}>Psicopedagogía</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleNavigation('Profesionales')}>Profesionales</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleNavigation('Tratamientos')}>Tratamientos</a>
              </li>
            </ul>

            {/* cambia el botón según si está autenticado o no */}
            {isLoggedIn ? (
            <div className="d-flex align-items-center">
             <button className="btn btn-primary me-2" onClick={() => navigate('/reserva-turno')}>Reservar Turno</button>
             <button className="btn btn-outline-primary me-2" onClick={() => navigate('/perfil')}>Perfil</button>
             <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button> {/* handleLogout */}
             </div>
              ) : (
              <button className="btn btn-success" onClick={() => navigate('/ingresar')}>Ingresar</button>
              )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
