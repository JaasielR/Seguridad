import React from 'react';
import '../../styles/video-vigilancia.css';

const VideoVigilancia: React.FC = () => {
    return (
        <div className="video-vigilancia">
            <header className="header-vv">
                <h1>VIDEO VIGILANCIA CCTV</h1>
                <p className="subtitulo">Soluciones integrales de seguridad · Tecnología avanzada · Protección 24/7</p>
            </header>

            <section className="seccion-essential">
                <div className="esencial-texto">
                    <h2>Soluciones Esenciales</h2>
                    <p>
                        Instalación profesional de sistemas CCTV analógicos e IP, monitoreo 24/7 desde centro de control certificado,
                        cámaras de alta resolución con visión nocturna e infrarroja, grabación en la nube y respaldo local con acceso remoto.
                    </p>
                </div>
                <div className="esencial-imagen">
                    <div className="imagen-esencial">
                        <span className="esencial-texto">Nuestras cámaras de alta resolución</span>
                    </div>
                </div>
            </section>

            <section className="seccion-features">
                <h2 className="section-title">Características Técnicas</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <span className="feature-icono">📹</span>
                        <span className="feature-texto"><strong>Cámaras de alta resolución</strong> con visión nocturna e infrarroja</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icono">📡</span>
                        <span className="feature-texto"><strong>Monitoreo 24/7</strong> desde centro de control certificado</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icono">☁️</span>
                        <span className="feature-texto"><strong>Grabación en la nube</strong> y respaldo local con acceso remoto</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icono">📱</span>
                        <span className="feature-texto"><strong>Detección de movimiento</strong> y alertas en tiempo real a tu celular</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icono">🔗</span>
                        <span className="feature-texto"><strong>Integración</strong> con alarmas, control de acceso y cercas eléctricas</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icono">🔧</span>
                        <span className="feature-texto"><strong>Mantenimiento preventivo y correctivo</strong> de equipos</span>
                    </div>
                </div>
            </section>

            <section className="seccion-videos">
                <h2 className="section-title">Prueba de cámaras</h2>
                <div className="videos-grid">
                    <div className="video-card">
                        <img src="/app/videos/crop_1-puedes-hacer-cada-una-de-las-imagenes-que-se-ven-m.jpg" alt="Cámara 1" />
                        <div className="video-card-overlay"></div>
                    </div>
                    <div className="video-card">
                        <img src="/app/videos/crop_2-puedes-hacer-cada-una-de-las-imagenes-que-se-ven-m.jpg" alt="Cámara 2" />
                        <div className="video-card-overlay"></div>
                    </div>
                    <div className="video-card">
                        <img src="/app/videos/crop_3-puedes-hacer-cada-una-de-las-imagenes-que-se-ven-m.jpg" alt="Cámara 3" />
                        <div className="video-card-overlay"></div>
                    </div>
                    <div className="video-card">
                        <img src="/app/videos/crop_4-puedes-hacer-cada-una-de-las-imagenes-que-se-ven-m.jpg" alt="Cámara 4" />
                        <div className="video-card-overlay"></div>
                    </div>
                    <div className="video-card">
                        <img src="/app/videos/crop_5-puedes-hacer-cada-una-de-las-imagenes-que-se-ven-m.jpg" alt="Cámara 5" />
                        <div className="video-card-overlay"></div>
                    </div>
                    <div className="video-card">
                        <img src="/app/videos/crop_6-puedes-hacer-cada-una-de-las-imagenes-que-se-ven-m.jpg" alt="Cámara 6" />
                        <div className="video-card-overlay"></div>
                    </div>
                    <div className="video-card">
                        <img src="/app/videos/crop_7-puedes-hacer-cada-una-de-las-imagenes-que-se-ven-m.jpg" alt="Cámara 7" />
                        <div className="video-card-overlay"></div>
                    </div>
                    <div className="video-card">
                        <img src="/app/videos/crop_8-puedes-hacer-cada-una-de-las-imagenes-que-se-ven-m.jpg" alt="Cámara 8" />
                        <div className="video-card-overlay"></div>
                    </div>
                    <div className="video-card">
                        <img src="/app/videos/crop_9-puedes-hacer-cada-una-de-las-imagenes-que-se-ven-m.jpg" alt="Cámara 9" />
                        <div className="video-card-overlay"></div>
                    </div>
                </div>
            </section>

            <section className="seccion-instalacion">
                <div className="instalacion-texto">
                    <h2>Instalación Profesional</h2>
                    <p>
                        Nuestro equipo técnico capacitado y con certificaciones vigentes realiza la instalación, configuración
                        y puesta en marcha de todos los sistemas de video vigilancia. Contamos con personal técnico altamente
                        calificado para garantizar el correcto funcionamiento de sus sistemas de seguridad.
                    </p>
                </div>
                <div className="instalacion-imagen">
                    <div className="imagen-instalacion">
                        <span className="instalacion-texto">Equipo técnico certificado en instalación</span>
                    </div>
                </div>
            </section>

            <footer className="footer-servicios">
                <p>Para más información, contacte al <strong>Lic. Eusebio Ortega</strong> al <strong>5529188467</strong></p>
                <p>Director Operativo · Central de Abastos Ecatepec, Estado de México</p>
            </footer>
        </div>
    );
};

export default VideoVigilancia;
