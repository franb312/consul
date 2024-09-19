

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Inicio() {
    return (
        <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-root-margin="0px 0px -40%"
            data-bs-smooth-scroll="true"
            className="scrollspy-example bg-body-tertiary p-3 rounded-2"
            tabIndex={0}
        >
            <h4 id="Inicio">Inicio</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

            <div id="carouselExample" className="carousel slide w-50" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card" style={{width: '30rem'}}>
                            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Card 1" />
                            <div className="card-body">
                                <h5 className="card-title">Título 1</h5>
                                <p className="card-text">Descripción de la tarjeta 1.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card" style={{width: '30rem'}}>
                            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Card 2" />
                            <div className="card-body">
                                <h5 className="card-title">Título 2</h5>
                                <p className="card-text">Descripción de la tarjeta 2.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card" style={{width: '30rem'}}>
                            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Card 3" />
                            <div className="card-body">
                                <h5 className="card-title">Título 3</h5>
                                <p className="card-text">Descripción de la tarjeta 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </a>
            </div>
        </div>
    );
}

export default Inicio;
