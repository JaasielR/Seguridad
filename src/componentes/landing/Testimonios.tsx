import React, { useCallback, useEffect, useState } from "react";
import { TESTIMONIOS } from "../../data/empresa";

/**
 * Sección TESTIMONIOS en carrusel (estilo referencia GYPSE): fondo blanco,
 * tarjeta clara, acentos verdes, controles accesibles con autoavance.
 */
const Testimonios: React.FC = () => {
    const [actual, setActual] = useState(0);
    const [pausado, setPausado] = useState(false);
    const total = TESTIMONIOS.length;

    const siguiente = useCallback(() => setActual((i) => (i + 1) % total), [total]);
    const anterior = useCallback(() => setActual((i) => (i - 1 + total) % total), [total]);

    useEffect(() => {
        if (pausado) return;
        const timer = setInterval(siguiente, 6000);
        return () => clearInterval(timer);
    }, [pausado, siguiente]);

    const testimonio = TESTIMONIOS[actual];

    return (
        <section id="testimonios" className="relative scroll-mt-20 bg-white px-5 py-24">
            <div className="mx-auto max-w-[900px]">
                <div className="mb-12 text-center">
                    <span className="mb-4 block text-[0.82rem] font-bold uppercase tracking-[3px] text-brand-400">
                        Testimonios
                    </span>
                    <h2 className="font-heading text-[2rem] font-bold leading-tight text-ink-900 sm:text-[2.4rem]">
                        Lo que dicen nuestros clientes
                    </h2>
                </div>

                <div
                    className="relative rounded-3xl border border-gray-100 bg-brand-50/60 p-8 shadow-[0_8px_40px_rgba(6,20,12,0.06)] sm:p-12"
                    onMouseEnter={() => setPausado(true)}
                    onMouseLeave={() => setPausado(false)}
                    role="group"
                    aria-roledescription="carrusel"
                    aria-label="Testimonios de clientes"
                >
                    <i className="pi pi-comment mb-5 block text-4xl text-brand-400" aria-hidden="true" />

                    <blockquote key={actual} className="animate-[fadeUp_0.5s_ease-out]">
                        <p className="mb-7 text-[1.1rem] leading-[1.9] text-ink-700 sm:text-[1.2rem]">
                            “{testimonio.texto}”
                        </p>
                        <footer className="flex items-center gap-4">
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-400 text-lg font-bold text-white">
                                {testimonio.nombre.charAt(0)}
                            </span>
                            <div>
                                <p className="font-heading font-bold text-ink-900">{testimonio.nombre}</p>
                                <p className="text-[0.88rem] text-ink-500">{testimonio.cargo}</p>
                            </div>
                        </footer>
                    </blockquote>

                    <div className="mt-8 flex items-center justify-between">
                        <button
                            onClick={anterior}
                            aria-label="Testimonio anterior"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 text-brand-700 transition-all duration-300 hover:bg-brand-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-400/40"
                        >
                            <i className="pi pi-chevron-left" aria-hidden="true" />
                        </button>

                        <div className="flex gap-2.5" role="tablist" aria-label="Seleccionar testimonio">
                            {TESTIMONIOS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActual(i)}
                                    role="tab"
                                    aria-selected={i === actual}
                                    aria-label={`Ir al testimonio ${i + 1}`}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                        i === actual
                                            ? "w-7 bg-brand-400"
                                            : "w-2.5 bg-brand-200 hover:bg-brand-300"
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={siguiente}
                            aria-label="Testimonio siguiente"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 text-brand-700 transition-all duration-300 hover:bg-brand-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-400/40"
                        >
                            <i className="pi pi-chevron-right" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonios;
