import React from "react";
import { LEMA, whatsappLink } from "../../data/empresa";

/**
 * Sección "Bolsa de trabajo" (estilo referencia GYPSE): banner verde oscuro
 * con texto blanco y CTA pill, estructura a dos columnas.
 */
const BolsaTrabajo: React.FC = () => {
    const postular = whatsappLink(
        "Hola, me interesa postularme a la bolsa de trabajo de seguridad. ¿Podrían darme información?"
    );

    return (
        <section id="bolsa-trabajo" className="relative scroll-mt-20 bg-brand-50 px-5 py-24">
            <div className="mx-auto max-w-[1100px] overflow-hidden rounded-3xl bg-brand-900 p-8 shadow-[0_20px_60px_rgba(6,20,12,0.25)] sm:p-12">
                <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
                    <div>
                        <span className="mb-4 block text-[0.82rem] font-bold uppercase tracking-[3px] text-brand-400">
                            Bolsa de trabajo
                        </span>
                        <h2 className="mb-5 font-display text-[1.9rem] font-extrabold leading-tight text-white sm:text-[2.4rem]">
                            Crece con un equipo que protege.
                        </h2>
                        <p className="mb-8 max-w-[520px] text-[1.02rem] leading-[1.8] text-brand-50/85">
                            Buscamos personas responsables, profesionales y con vocación de servicio.
                            Súmate a nuestro equipo y contribuye a crear entornos más seguros en las
                            distintas regiones donde tenemos presencia.
                        </p>
                        <a
                            href={postular}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full bg-brand-400 px-8 py-4 text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-600"
                        >
                            <i className="pi pi-briefcase" aria-hidden="true" />
                            Enviar solicitud
                            <i
                                className="pi pi-arrow-up-right transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                aria-hidden="true"
                            />
                        </a>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                        <i className="pi pi-shield mb-4 block text-4xl text-brand-400" aria-hidden="true" />
                        <p className="mb-5 text-[0.95rem] leading-[1.7] text-brand-50/85">
                            La seguridad se construye con personas comprometidas, preparación y
                            respeto.
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[0.8rem] font-semibold uppercase tracking-[2px] text-brand-100">
                            {LEMA.map((palabra, i) => (
                                <React.Fragment key={palabra}>
                                    {i > 0 && <span className="text-brand-400">·</span>}
                                    <span>{palabra}</span>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BolsaTrabajo;
