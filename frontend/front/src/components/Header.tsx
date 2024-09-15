import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
  return (
    <>
      <nav id="navbar-example2" className="navbar navbar-expand-lg bg-body-tertiary px-3 mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#scrollspyHeading1">
            KINEL
          </a>
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
                <a className="nav-link active" aria-current="page" href="#Inicio">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Profesionales">
                  Profesionales
                </a>
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
                  <li>
                    <a className="dropdown-item" href="#Kinesiologia">
                      Kinesiología
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#Nutricion">
                      Nutrición
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#Psicopedagogia">
                      Psicopedagogía
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Tratamientos">
                  Tratamientos
                </a>
              </li>
            </ul>

            <button className="btn btn-sign-in" type="button">
              Ingresar
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
