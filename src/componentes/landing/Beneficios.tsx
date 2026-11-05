import React from "react";
import { RAZONES } from "../../data/empresa";

/**
 * Sección "¿Por qué elegirnos?" con razones numeradas (01–06), estilo
 * referencia GYPSE: fondo verde muy claro, número verde grande, tarjetas
 * blancas minimalistas.
 */
const Beneficios: React.FC = () => {
    return (
        <section id="beneficios" className="relative scroll-mt-20 bg-brand-50 px-5 py-24">
            <div className="mx-auto max-w-[1240px]">
                <div className="mb-14 max-w-[720px]">
                    <span className="mb-4 block text-[0.82rem] font-bold uppercase tracking-[3px] text-brand-400">
                        Nuestro compromiso
                    </span>
                    <h2 className="mb-5 font-heading text-[2rem] font-bold leading-tight text-ink-900 sm:text-[2.6rem]">
                        ¿Por qué elegirnos?
                    </h2>
                    <p className="text-[1.05rem] leading-[1.8] text-ink-500">
                        Un servicio confiable requiere personas preparadas, procesos claros y
                        seguimiento constante.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {RAZONES.map((razon, i) => (
                        <article
                            key={razon.titulo}
                            className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgba(6,20,12,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_40px_rgba(27,156,133,0.12)]"
                        >
                            <span className="mb-4 block font-display text-[2.2rem] font-extrabold leading-none text-brand-400/80 transition-colors group-hover:text-brand-400">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="mb-2 font-heading text-[1.1rem] font-bold text-ink-900">
                                {razon.titulo}
                            </h3>
                            <p className="text-[0.95rem] leading-[1.7] text-ink-500">
                                {razon.descripcion}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Beneficios;
