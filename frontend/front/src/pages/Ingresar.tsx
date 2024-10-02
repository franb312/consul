import 'bootstrap/dist/css/bootstrap.min.css';

function Ingresar() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card" style={{ width: '30rem', minHeight: '20rem' }}>
        <div className="card-body">
          <div className='title'>Ingresar</div>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Correo electronico</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check d-flex justify-content-between">
              <div>
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Recordarme</label>
              </div>
              <a href="/recuperar-contrasena" className="text-decoration-none">Olvidé mi contraseña</a>
            </div>
            <button type="submit" className="btn btn-success">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Ingresar;

