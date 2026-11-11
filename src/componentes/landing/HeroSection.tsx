import React from "react";
import { useNavigate } from "react-router-dom";
import { LEMA, whatsappLink } from "../../data/empresa";

/**
 * HERO principal (estilo referencia GYPSE): imagen de fondo con velo verde
 * oscuro, texto blanco centrado/alineado, lema tripartito y botones pill.
 */
const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    const irAContacto = () => navigate("/contacto");

    return (
        <section
            id="inicio"
            className="relative flex min-h-[92vh] items-center overflow-hidden bg-brand-900 px-5 pb-20 pt-28"
        >
            {/* Imagen de fondo con velo verde oscuro */}
            <div
                className={"absolute inset-0 bg-[url('/fondod.jpg?v=2')] bg-cover bg-center bg-no-repeat brightness-[0.3]"}
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 bg-gradient-to-br from-brand-900/92 via-brand-900/85 to-brand-800/80"
                aria-hidden="true"
            />

            <div className="relative z-[1] mx-auto w-full max-w-[1240px]">
                <div className="max-w-[760px] animate-[fadeUp_0.9s_ease-out]">
                    {/* Lema tripartito (estilo GYPSE) */}
                    <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.9rem] font-semibold uppercase tracking-[3px] text-brand-100">
                        <span>Seguridad Integral, Custodia y Asistencia Especializada</span>
                    </div>


                    <h1 className="mb-6 font-display text-[2.6rem] font-extrabold leading-[1.1] text-white sm:text-[3.6rem] md:text-[4.2rem]">
                        Protegemos lo que más importa.
                    </h1>

                    <p className="mb-8 max-w-[600px] text-[1.15rem] leading-relaxed text-brand-50/90">
                        Diseñamos soluciones de seguridad privada para proteger personas, instalaciones y operaciones.
                        Combinamos personal capacitado, supervisión constante y atención oportuna para responder a
                        las necesidades de cada cliente.
                    </p>

                    {/* Oferta de diagnóstico sin costo */}
                    <p className="mb-9 flex items-center gap-2 text-[0.98rem] text-brand-100">
                        <i className="pi pi-check-circle text-brand-400" aria-hidden="true" />
                        Diagnóstico de necesidades de seguridad sin costo y sin compromiso.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button
                            onClick={irAContacto}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-400 px-8 py-4 text-[0.98rem] font-semibold text-white shadow-lg shadow-brand-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-600 sm:w-auto"
                        >
                            <i className="pi pi-send" aria-hidden="true" />
                            Solicitar Diagnóstico
                        </button>

                        <a
                            href={whatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-transparent px-8 py-4 text-[0.98rem] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10 sm:w-auto"
                        >
                            <i className="pi pi-whatsapp" aria-hidden="true" />
                            Contactar por WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Indicador de scroll */}
            <button
                onClick={() =>
                    document.getElementById("quienes-somos")?.scrollIntoView({ behavior: "smooth" })
                }
                aria-label="Desplazarse hacia abajo"
                className="absolute bottom-8 left-1/2 z-[1] -translate-x-1/2 animate-bounce text-white/70 transition-colors hover:text-white"
            >
                <i className="pi pi-chevron-down text-2xl" aria-hidden="true" />
            </button>
        </section>
    );
};

export default HeroSection;
