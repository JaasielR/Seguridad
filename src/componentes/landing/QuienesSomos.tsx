import React from "react";
import { VALORES } from "../../data/empresa";

/** Fondo: edificio con geometría verde de la identidad visual. */
const FONDO = `${import.meta.env.BASE_URL}ref/4/fondo_con_edificio_1920x1080.png`;

/**
 * Sección "Quiénes somos": presentación editorial sobre el fondo del edificio
 * con geometría verde, chips de valores y tarjetas de Misión y Visión.
 */
const QuienesSomos: React.FC = () => {
    const pilares = [
        {
            icono: "pi pi-flag",
            etiqueta: "Nuestra razón de ser",
            titulo: "Misión",
            texto:
                "Brindar servicios de seguridad privada confiables y profesionales, mediante personal capacitado, supervisión constante y estrategias adaptadas a cada cliente, contribuyendo a proteger su patrimonio y garantizar la continuidad de sus operaciones.",
        },
        {
            icono: "pi pi-compass",
            etiqueta: "Hacia dónde vamos",
            titulo: "Visión",
            texto:
                "Consolidarnos como una empresa referente en seguridad privada en México, reconocida por la confianza de nuestros clientes, la calidad de nuestro servicio, la preparación de nuestro personal y nuestra capacidad para evolucionar ante los nuevos desafíos de seguridad.",
        },
    ];

    return (
        <section
            id="quienes-somos"
            className="relative scroll-mt-20 overflow-hidden bg-brand-50 px-5 py-24"
        >
            {/* Fondo fotográfico: edificio + geometría de marca */}
            <div
                className="pointer-events-none absolute inset-0 bg-cover bg-[position:center_bottom] bg-no-repeat saturate-[1.12]"
                style={{ backgroundImage: `url(${FONDO})` }}
                aria-hidden="true"
            />

            {/* Velo para conservar la legibilidad y la armonía con la paleta */}
            <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/85 via-brand-50/60 to-brand-50/20"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-50/85 to-transparent"
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-[1240px]">
                <div className="mb-14 max-w-[760px]">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-[2px] w-9 rounded-full bg-brand-400" aria-hidden="true" />
                        <span className="text-[0.82rem] font-bold uppercase tracking-[3px] text-brand-500">
                            Quiénes somos
                        </span>
                    </div>
                    <h2 className="mb-5 font-heading text-[2rem] font-bold leading-tight text-ink-900 sm:text-[2.6rem]">
                        Seguridad integral para{" "}
                        <span className="text-brand-700">proteger lo que más importa.</span>
                    </h2>
                    <p className="text-[1.05rem] leading-[1.9] text-ink-500">
                        <strong className="text-brand-700">Grupo SICAE</strong> es una empresa mexicana especializada
                        en servicios de seguridad privada. Trabajamos para proteger personas, instalaciones y bienes mediante
                        personal capacitado, supervisión operativa y soluciones de seguridad adaptadas a las necesidades de cada cliente.
                        <br/>
                        Nuestro compromiso es brindar confianza, atención oportuna y un servicio profesional, respaldado
                        por una operación responsable y acompañamiento permanente los 365 días del año.
                    </p>

                    {/* Chips de valores (estilo GYPSE) */}
                    <div className="mt-7 flex flex-wrap gap-3">
                        {VALORES.map((valor) => (
                            <span
                                key={valor}
                                className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-[0.85rem] font-medium text-ink-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-brand-400 hover:bg-white hover:text-brand-700"
                            >
                                <i className="pi pi-check text-brand-500" aria-hidden="true" />
                                {valor}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Misión / Visión */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {pilares.map((item, indice) => (
                        <article
                            key={item.titulo}
                            className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-8 shadow-[0_18px_45px_rgba(6,20,12,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:bg-white hover:shadow-[0_24px_55px_rgba(27,156,133,0.18)] md:p-10"
                        >
                            {/* Filete superior de marca */}
                            <span
                                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600"
                                aria-hidden="true"
                            />

                            {/* Número de marca como marca de agua */}
                            <span
                                className="pointer-events-none absolute -right-1 top-4 select-none font-heading text-[6.5rem] font-extrabold leading-none text-brand-50 transition-colors duration-300 group-hover:text-brand-100"
                                aria-hidden="true"
                            >
                                {String(indice + 1).padStart(2, "0")}
                            </span>

                            <div className="relative">
                                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-500 transition-colors duration-300 group-hover:bg-brand-400 group-hover:text-white">
                                    <i className={item.icono} aria-hidden="true" />
                                </span>

                                <span className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[3px] text-brand-400">
                                    {item.etiqueta}
                                </span>
                                <h3 className="mb-3 font-heading text-[1.45rem] font-bold text-ink-900">
                                    {item.titulo}
                                </h3>
                                <p className="max-w-[560px] text-[0.98rem] leading-[1.85] text-ink-500">
                                    {item.texto}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuienesSomos;
