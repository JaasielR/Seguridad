import React from 'react';
import '../../styles/contact.css';

const Contacto: React.FC = () => {
    return (
        <div className="contacto">
            <header className="header-contacto">
                <h1>CONTACTO</h1>
                <p className="subtitulo">¿Necesita servicios de seguridad? Contáctenos</p>
            </header>

            <section className="seccion-contacto">
                <div className="contacto-info">
                    <div className="info-item">
                        <span className="info-icono">📞</span>
                        <div>
                            <span className="info-etiqueta">Teléfono</span>
                            <strong className="info-valor">5529188467</strong>
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="info-icono">👤</span>
                        <div>
                            <span className="info-etiqueta">Director</span>
                            <strong className="info-valor">Lic. Eusebio Ortega</strong>
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="info-icono">📍</span>
                        <div>
                            <span className="info-etiqueta">Ubicación</span>
                            <strong className="info-valor">Ecatepec, Estado de México</strong>
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="info-icono">🕐</span>
                        <div>
                            <span className="info-etiqueta">Horario</span>
                            <strong className="info-valor">24/7</strong>
                        </div>
                    </div>
                </div>

                <div className="contacto-formulario">
                    <form className="formulario">
                        <div className="formulario-grupo">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                placeholder="Ingrese su nombre"
                            />
                        </div>
                        <div className="formulario-grupo">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="su@correo.com"
                            />
                        </div>
                        <div className="formulario-grupo">
                            <label htmlFor="telefono">Teléfono</label>
                            <input
                                type="tel"
                                id="telefono"
                                placeholder="55 1234 5678"
                            />
                        </div>
                        <div className="formulario-grupo">
                            <label htmlFor="servicio">Servicio de interés</label>
                            <select id="servicio">
                                <option value="">Seleccione un servicio</option>
                                <option value="cctv">Video Vigilancia CCTV</option>
                                <option value="motopatrullas">Motopatrullas</option>
                                <option value="recorridos">Recorridos Nocturnos</option>
                                <option value="vigilancia">Vigilancia Fija</option>
                                <option value="custodia">Custodia de Personas</option>
                                <option value="proteccion">Protección a Directivos</option>
                            </select>
                        </div>
                        <div className="formulario-grupo">
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea
                                id="mensaje"
                                rows={5}
                                placeholder="Explique su necesidad de seguridad..."
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-enviar">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </section>

            <footer className="footer-servicios">
                <p>Para más información, contacte al <strong>Lic. Eusebio Ortega</strong> al <strong>5529188467</strong></p>
                <p>Director Operativo · Central de Abastos Ecatepec, Estado de México</p>
            </footer>
        </div>
    );
};

export default Contacto;
