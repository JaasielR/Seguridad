import React from 'react';

const VideoVigilancia: React.FC = () => {
    const videos = Array.from({ length: 9 }, (_, i) => i + 1);

    return (
        <div className="page-shell">
            <header className="page-header">
                <h1 className="plate-heading">VIDEO VIGILANCIA CCTV</h1>
                <p className="page-subtitle mt-4">Soluciones integrales de seguridad · Tecnología avanzada · Protección 24/7</p>
            </header>

            <section className="split-section">
                <div className="flex-1 p-[30px]">
                    <h2 className="section-title">Soluciones Esenciales</h2>
                    <p className="body-text">
                        Instalación profesional de sistemas CCTV analógicos e IP, monitoreo 24/7 desde centro de control certificado,
                        cámaras de alta resolución con visión nocturna e infrarroja, grabación en la nube y respaldo local con acceso remoto.
                    </p>
                </div>
                <div className="flex flex-shrink-0 items-center justify-center md:basis-[400px]">
                    <div className="gold-box">
                        <span className="block text-[1.05em] font-semibold tracking-wide text-navy-900">Nuestras cámaras de alta resolución</span>
                    </div>
                </div>
            </section>

            <section className="ivory-section mx-auto max-w-[1400px]">
                <h2 className="ivory-heading">Características Técnicas</h2>
                <div className="gold-rule"></div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 pt-4 text-left">
                    <div className="flex items-center gap-5 rounded-xl border border-navy-200 bg-white/60 p-[25px] transition-all duration-300 hover:-translate-y-[4px] hover:border-gold-400 hover:shadow-gold">
                        <span className="flex-shrink-0 text-[2.5em]">📹</span>
                        <span className="text-[1em] leading-[1.6] text-navy-600"><strong className="text-navy-800">Cámaras de alta resolución</strong> con visión nocturna e infrarroja</span>
                    </div>
                    <div className="flex items-center gap-5 rounded-xl border border-navy-200 bg-white/60 p-[25px] transition-all duration-300 hover:-translate-y-[4px] hover:border-gold-400 hover:shadow-gold">
                        <span className="flex-shrink-0 text-[2.5em]">📡</span>
                        <span className="text-[1em] leading-[1.6] text-navy-600"><strong className="text-navy-800">Monitoreo 24/7</strong> desde centro de control certificado</span>
                    </div>
                    <div className="flex items-center gap-5 rounded-xl border border-navy-200 bg-white/60 p-[25px] transition-all duration-300 hover:-translate-y-[4px] hover:border-gold-400 hover:shadow-gold">
                        <span className="flex-shrink-0 text-[2.5em]">☁️</span>
                        <span className="text-[1em] leading-[1.6] text-navy-600"><strong className="text-navy-800">Grabación en la nube</strong> y respaldo local con acceso remoto</span>
                    </div>
                    <div className="flex items-center gap-5 rounded-xl border border-navy-200 bg-white/60 p-[25px] transition-all duration-300 hover:-translate-y-[4px] hover:border-gold-400 hover:shadow-gold">
                        <span className="flex-shrink-0 text-[2.5em]">📱</span>
                        <span className="text-[1em] leading-[1.6] text-navy-600"><strong className="text-navy-800">Detección de movimiento</strong> y alertas en tiempo real a tu celular</span>
                    </div>
                    <div className="flex items-center gap-5 rounded-xl border border-navy-200 bg-white/60 p-[25px] transition-all duration-300 hover:-translate-y-[4px] hover:border-gold-400 hover:shadow-gold">
                        <span className="flex-shrink-0 text-[2.5em]">🔗</span>
                        <span className="text-[1em] leading-[1.6] text-navy-600"><strong className="text-navy-800">Integración</strong> con alarmas, control de acceso y cercas eléctricas</span>
                    </div>
                    <div className="flex items-center gap-5 rounded-xl border border-navy-200 bg-white/60 p-[25px] transition-all duration-300 hover:-translate-y-[4px] hover:border-gold-400 hover:shadow-gold">
                        <span className="flex-shrink-0 text-[2.5em]">🔧</span>
                        <span className="text-[1em] leading-[1.6] text-navy-600"><strong className="text-navy-800">Mantenimiento preventivo y correctivo</strong> de equipos</span>
                    </div>
                </div>
            </section>

            <section className="px-4">
                <h2 className="section-heading">Prueba de cámaras</h2>
                <div className="mx-auto grid max-w-[1400px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 py-[30px]">
                    {videos.map((n) => (
                        <div key={n} className="relative overflow-hidden rounded-xl border border-gold-400/40 shadow-plate transition-transform duration-300 hover:-translate-y-2 hover:shadow-gold-lg">
                            <img
                                src={`/app/videos/crop_${n}-puedes-hacer-cada-una-de-las-imagenes-que-se-ven-m.jpg`}
                                alt={`Cámara ${n}`}
                                className="block h-[200px] w-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/85 to-transparent p-[30px] text-center text-[1.2em] font-bold text-gold-100"></div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-[50px] flex flex-col items-center justify-between gap-10 rounded-[15px] border border-gold-400/35 bg-navy-800/70 p-[50px] text-center shadow-plate md:flex-row md:text-left">
                <div className="flex-1 p-[30px]">
                    <h2 className="section-title">Instalación Profesional</h2>
                    <p className="body-text">
                        Nuestro equipo técnico capacitado y con certificaciones vigentes realiza la instalación, configuración
                        y puesta en marcha de todos los sistemas de video vigilancia. Contamos con personal técnico altamente
                        calificado para garantizar el correcto funcionamiento de sus sistemas de seguridad.
                    </p>
                </div>
                <div className="flex flex-shrink-0 items-center justify-center md:basis-[400px]">
                    <div className="gold-box">
                        <span className="block text-[1.05em] font-semibold tracking-wide text-navy-900">Equipo técnico certificado en instalación</span>
                    </div>
                </div>
            </section>

            <footer className="site-footer">
                <p>Para más información, contacte al <strong>Lic. Eusebio Ortega</strong> al <strong>5529188467</strong></p>
                <p>Director Operativo · Central de Abastos Ecatepec, Estado de México</p>
            </footer>
        </div>
    );
};

export default VideoVigilancia;
