import React, { useCallback, useEffect, useRef, useState } from "react";
import { SECTORES } from "../../data/empresa";

/** Resuelve rutas de /public respetando el BASE_URL (GitHub Pages). */
const asset = (ruta: string) => `${import.meta.env.BASE_URL}${ruta}`;

/**
 * Sección "Relaciones de confianza": carrusel de imágenes de los sectores
 * que confían en Grupo SICAE. Cada diapositiva muestra la fotografía del
 * sector con su nombre sobreimpreso, sustituyendo la cuadrícula de tarjetas.
 *
 * El carrusel usa scroll-snap nativo (accesible con teclado y gestos),
 * flechas laterales en escritorio, controles inferiores en móvil y avance
 * automático que se pausa al interactuar o si el usuario prefiere menos
 * movimiento.
 */
const Clientes: React.FC = () => {
    const pistaRef = useRef<HTMLDivElement>(null);
    const activoRef = useRef(0);
    const programaticoRef = useRef(false);
    const esperaRef = useRef<number | null>(null);
    const [activo, setActivo] = useState(0);
    const [pausado, setPausado] = useState(false);

    const total = SECTORES.length;

    /** Desplaza la pista hasta la diapositiva indicada (con vuelta circular). */
    const irA = useCallback(
        (indice: number) => {
            const pista = pistaRef.current;
            if (!pista) return;

            const destino = ((indice % total) + total) % total;
            const slide = pista.children[destino] as HTMLElement | undefined;
            if (!slide) return;

            const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const izquierda =
                pista.scrollLeft +
                slide.getBoundingClientRect().left -
                pista.getBoundingClientRect().left;

            // La posición se fija explícitamente: al llegar al final la pista
            // no puede desplazarse más, pero el punto activo debe reflejar
            // la diapositiva elegida.
            programaticoRef.current = true;
            if (esperaRef.current !== null) window.clearTimeout(esperaRef.current);
            esperaRef.current = window.setTimeout(() => {
                programaticoRef.current = false;
            }, 1200);

            pista.scrollTo({ left: izquierda, behavior: reducir ? "auto" : "smooth" });
            activoRef.current = destino;
            setActivo(destino);
        },
        [total],
    );

    const mover = useCallback(
        (delta: number) => irA(activoRef.current + delta),
        [irA],
    );

    /** Sincroniza el punto activo con la primera diapositiva visible al deslizar. */
    useEffect(() => {
        const pista = pistaRef.current;
        if (!pista) return;

        const alDesplazar = () => {
            if (programaticoRef.current) return;

            const borde = pista.getBoundingClientRect().left + 4;
            let mejor = 0;
            let distanciaMenor = Infinity;

            Array.from(pista.children).forEach((hijo, indice) => {
                const rect = (hijo as HTMLElement).getBoundingClientRect();
                const distancia = Math.abs(rect.left - borde);
                if (distancia < distanciaMenor) {
                    distanciaMenor = distancia;
                    mejor = indice;
                }
            });

            activoRef.current = mejor;
            setActivo(mejor);
        };

        pista.addEventListener("scroll", alDesplazar, { passive: true });
        return () => pista.removeEventListener("scroll", alDesplazar);
    }, []);

    useEffect(
        () => () => {
            if (esperaRef.current !== null) window.clearTimeout(esperaRef.current);
        },
        [],
    );

    /** Avance automático, suspendido al pasar el cursor o enfocar el carrusel. */
    useEffect(() => {
        if (pausado) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const id = window.setInterval(() => irA(activoRef.current + 1), 5000);
        return () => window.clearInterval(id);
    }, [pausado, irA]);

    return (
        <section id="clientes" className="relative scroll-mt-20 bg-white px-5 py-24">
            <div className="mx-auto max-w-[1240px]">
                <div className="mx-auto mb-12 max-w-[680px] text-center">
                    <span className="mb-4 block text-[0.82rem] font-bold uppercase tracking-[3px] text-brand-400">
                        Relaciones de confianza
                    </span>
                    <h2 className="mb-5 font-heading text-[2rem] font-bold leading-tight text-ink-900 sm:text-[2.4rem]">
                        Organizaciones que protegemos.
                    </h2>
                    <p className="text-[1.05rem] leading-[1.8] text-ink-500">
                        Agradecemos la confianza de las empresas, comercios y organizaciones que nos permiten
                        acompañar sus operaciones día con día.
                    </p>
                </div>

                <div
                    role="region"
                    aria-roledescription="carrusel"
                    aria-label="Sectores que protegemos"
                    className="relative"
                    onMouseEnter={() => setPausado(true)}
                    onMouseLeave={() => setPausado(false)}
                    onFocusCapture={() => setPausado(true)}
                    onBlurCapture={() => setPausado(false)}
                >
                    {/* Anuncio accesible del sector visible */}
                    <span className="sr-only" aria-live="polite">
                        Sector {activo + 1} de {total}: {SECTORES[activo]?.nombre}
                    </span>

                    {/* Pista deslizable */}
                    <div
                        ref={pistaRef}
                        tabIndex={0}
                        aria-label="Carrusel de sectores"
                        className="flex snap-x snap-mandatory gap-[1.25rem] overflow-x-auto overscroll-x-contain scroll-smooth pb-3 outline-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden focus-visible:ring-2 focus-visible:ring-brand-400/60 focus-visible:ring-offset-4"
                    >
                        {SECTORES.map((sector, indice) => (
                            <article
                                key={sector.nombre}
                                role="group"
                                aria-roledescription="diapositiva"
                                aria-label={`${indice + 1} de ${total}: ${sector.nombre}`}
                                className="group relative w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl bg-brand-900 shadow-[0_14px_40px_rgba(6,20,12,0.14)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 sm:w-[46%] md:w-[31.5%]"
                            >
                                {/* Imagen del sector (o tarjeta de marca si falta) */}
                                <div className="aspect-[4/5] w-full">
                                    {sector.imagen ? (
                                        <img
                                            src={asset(sector.imagen)}
                                            alt={`${sector.nombre}: sector atendido por Grupo SICAE`}
                                            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                                            loading={indice === 0 ? "eager" : "lazy"}
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#1B9C85_0%,#178E79_45%,#0f3a2b_100%)]">
                                            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/10 text-3xl text-white backdrop-blur-sm">
                                                <i className="pi pi-heart-fill" aria-hidden="true" />
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Velo para asegurar la lectura del nombre */}
                                <div
                                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,12,0)_32%,rgba(6,20,12,0.22)_58%,rgba(6,20,12,0.88)_100%)]"
                                    aria-hidden="true"
                                />

                                {/* Número de diapositiva */}
                                <span className="absolute left-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-full border border-white/35 bg-white/15 px-2 text-[0.7rem] font-bold tracking-[2px] text-white backdrop-blur-md">
                                    {String(indice + 1).padStart(2, "0")}
                                </span>

                                {/* Nombre del sector */}
                                <div className="absolute inset-x-0 bottom-0 p-[1.25rem] sm:p-[1.5rem]">
                                    <span className="mb-1.5 block text-[0.68rem] font-bold uppercase tracking-[3px] text-white/65">
                                        Sector atendido
                                    </span>
                                    <h3 className="font-heading text-[1.2rem] font-bold leading-snug text-white sm:text-[1.32rem]">
                                        {sector.nombre}
                                    </h3>
                                </div>

                                {/* Filete de marca al pasar el cursor */}
                                <span
                                    className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand-300 via-brand-400 to-brand-200 transition-transform duration-500 group-hover:scale-x-100"
                                    aria-hidden="true"
                                />
                            </article>
                        ))}
                    </div>

                    {/* Flechas laterales (escritorio) */}
                    <button
                        type="button"
                        onClick={() => mover(-1)}
                        aria-label="Sector anterior"
                        className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/85 text-ink-700 shadow-[0_8px_24px_rgba(6,20,12,0.18)] backdrop-blur-md transition-colors duration-300 hover:bg-brand-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 lg:flex"
                    >
                        <i className="pi pi-angle-left text-lg" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        onClick={() => mover(1)}
                        aria-label="Sector siguiente"
                        className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/85 text-ink-700 shadow-[0_8px_24px_rgba(6,20,12,0.18)] backdrop-blur-md transition-colors duration-300 hover:bg-brand-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 lg:flex"
                    >
                        <i className="pi pi-angle-right text-lg" aria-hidden="true" />
                    </button>

                    {/* Controles inferiores */}
                    <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4 lg:mt-8">
                        <button
                            type="button"
                            onClick={() => mover(-1)}
                            aria-label="Sector anterior"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-100 bg-white text-ink-700 shadow-sm transition-colors duration-300 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 sm:h-10 sm:w-10 lg:hidden"
                        >
                            <i className="pi pi-angle-left" aria-hidden="true" />
                        </button>

                        <div className="flex items-center gap-1.5 sm:gap-2">
                            {SECTORES.map((sector, indice) => (
                                <button
                                    key={sector.nombre}
                                    type="button"
                                    onClick={() => irA(indice)}
                                    aria-label={`Ir al sector: ${sector.nombre}`}
                                    aria-current={activo === indice ? "true" : undefined}
                                    className="group flex h-6 items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                                >
                                    <span
                                        className={`block h-2 rounded-full transition-all duration-300 ${
                                            activo === indice
                                                ? "w-6 bg-brand-500 sm:w-7"
                                                : "w-1.5 bg-ink-300/60 group-hover:bg-brand-300 sm:w-2"
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => mover(1)}
                            aria-label="Sector siguiente"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-100 bg-white text-ink-700 shadow-sm transition-colors duration-300 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 sm:h-10 sm:w-10 lg:hidden"
                        >
                            <i className="pi pi-angle-right" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clientes;
