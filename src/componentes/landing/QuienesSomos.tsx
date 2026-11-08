import React from "react";
import { SECTORES, VALORES } from "../../data/empresa";

/**
 * Sección "Quiénes somos" (estilo referencia GYPSE): fondo verde muy claro,
 * misión/visión/valores en tarjetas blancas, chips de valores y sectores.
 */
const QuienesSomos: React.FC = () => {
    return (
        <section
            id="quienes-somos"
            className="relative scroll-mt-20 bg-brand-50 px-5 py-24"
        >
            <div className="mx-auto max-w-[1240px]">
                <div className="mb-14 max-w-[760px]">
                    <span className="mb-4 block text-[0.82rem] font-bold uppercase tracking-[3px] text-brand-400">
                        Quiénes somos
                    </span>
                    <h2 className="mb-5 font-heading text-[2rem] font-bold leading-tight text-ink-900 sm:text-[2.6rem]">
                        Seguridad integral para proteger lo que más importa.
                    </h2>
                    <p className="text-[1.05rem] leading-[1.9] text-ink-500">
                        <strong className="text-brand-700">Grupo SICAE</strong> es una empresa mexicana especializada en
                        seguridad privada. Con presencia en la Central de Abastos de Ecatepec, integramos personal
                        altamente capacitado, tecnología de vigilancia y protocolos operativos certificados para
                        proteger a las personas, las instalaciones y las mercancías de nuestros clientes. Ofrecemos
                        soluciones a la medida, respuesta oportuna y acompañamiento permanente los 365 días del año.
                    </p>

                    {/* Chips de valores (estilo GYPSE) */}
                    <div className="mt-7 flex flex-wrap gap-3">
                        {VALORES.map((valor) => (
                            <span
                                key={valor}
                                className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-[0.85rem] font-medium text-ink-700 transition-all duration-300 hover:border-brand-400 hover:text-brand-700"
                            >
                                <i className="pi pi-check text-brand-500" aria-hidden="true" />
                                {valor}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Misión / Visión / Valores */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {[
                        {
                            icono: "pi pi-flag",
                            titulo: "Misión",
                            texto:
                                "Garantizar la seguridad y protección de nuestros clientes mediante soluciones integrales de seguridad privada, apoyadas en personal confiable, capacitación continua y excelencia operativa, contribuyendo al desarrollo seguro de sus actividades comerciales.",
                        },
                        {
                            icono: "pi pi-compass",
                            titulo: "Visión",
                            texto:
                                "Ser la empresa líder en seguridad privada en México, reconocida por nuestra confianza, innovación y excelencia operativa en la prestación de servicios.",
                        },
                        {
                            icono: "pi pi-star",
                            titulo: "Valores",
                            texto:
                                "Confianza, profesionalismo, confidencialidad y reacción inmediata. Trato profesional 24/7 y compromiso absoluto con la protección de nuestros clientes.",
                        },
                    ].map((item) => (
                        <article
                            key={item.titulo}
                            className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgba(6,20,12,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_40px_rgba(27,156,133,0.12)]"
                        >
                            <span className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-brand-50 p-3 text-2xl text-brand-500 transition-colors group-hover:bg-brand-400 group-hover:text-white">
                                <i className={item.icono} aria-hidden="true" />
                            </span>
                            <h3 className="mb-3 font-heading text-[1.3rem] font-bold text-ink-900">
                                {item.titulo}
                            </h3>
                            <p className="text-[0.98rem] leading-[1.8] text-ink-500">{item.texto}</p>
                        </article>
                    ))}
                </div>

                {/* Experiencia / sectores atendidos */}
                <div className="mt-10 rounded-2xl bg-brand-900 px-6 py-10 text-white md:px-12">
                    <h3 className="mb-2 text-center font-heading text-[1.5rem] font-bold">
                        Experiencia y presencia
                    </h3>
                    <p className="mx-auto mb-7 max-w-[720px] text-center text-[1rem] leading-[1.7] text-brand-50/85">
                        Nuestros protocolos certificados y personal especializado protegen
                        diariamente a organizaciones de múltiples sectores dentro y fuera de la
                        Central:
                    </p>
                    <ul className="flex flex-wrap justify-center gap-3">
                        {SECTORES.map((sector) => (
                            <li
                                key={sector}
                                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.9rem] font-medium text-brand-50 transition-all duration-300 hover:border-brand-400 hover:bg-white/10"
                            >
                                <i className="pi pi-check-circle text-brand-400" aria-hidden="true" />
                                {sector}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default QuienesSomos;
