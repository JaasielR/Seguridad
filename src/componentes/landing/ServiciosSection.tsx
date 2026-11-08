import React from "react";
import { Link } from "react-router-dom";
import { SERVICIOS } from "../../data/empresa";

/**
 * Sección "Soluciones especializadas" — réplica de la referencia visual.
 *
 * Composición:
 *   - Fondo fotográfico a sangre (Servicios.jpg) con un velo claro que se
 *     desvanece hacia abajo para dejar visible la cámara del lado izquierdo.
 *   - Columna izquierda: filete y eyebrow teal, titular grande en azul
 *     marino con la palabra "operación." en verde, y párrafo descriptivo.
 *   - Columna derecha: cuadrícula 3×2 de tarjetas blancas con un pequeño
 *     acento teal arriba a la izquierda, icono ilustrado, título, resumen,
 *     enlace y un filete menta inferior.
 *
 * Los iconos se toman de /public/ref/1 y se resuelven con BASE_URL para
 * funcionar tanto en desarrollo como en GitHub Pages (/Seguridad/).
 *
 * Nota: Bootstrap se importa globalmente y sus utilidades de espaciado
 * (m/p/gap 0–5) llevan !important, por lo que aquí se usan valores
 * arbitrarios para que Tailwind conserve la escala exacta del diseño.
 */

/** Construye la URL de un recurso de /public respetando la base de Vite. */
const asset = (ruta: string): string => `${import.meta.env.BASE_URL}${ruta}`;

const ServiciosSection: React.FC = () => {
    return (
        <section
            id="servicios"
            className="relative scroll-mt-20 overflow-hidden bg-[#eef6f8] px-[20px] py-16 [font-family:'Poppins','Montserrat',sans-serif] sm:px-[24px] sm:py-20 lg:px-[40px] lg:pb-[64px] lg:pt-[80px]"
        >
            {/* ── Fondo fotográfico ── */}
            <div
                className="pointer-events-none absolute inset-0 bg-cover bg-[position:30%_center] bg-no-repeat md:bg-center"
                style={{ backgroundImage: `url(${asset("ref/1/Servicios.jpg")})` }}
                aria-hidden="true"
            />

            {/* ── Velo claro: intenso arriba, transparente abajo (cámara visible) ── */}
            <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.45)_30%,rgba(255,255,255,0.12)_62%,rgba(255,255,255,0)_100%)]"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(255,255,255,0.55),transparent_55%)]"
                aria-hidden="true"
            />

            {/* ── Formas decorativas teal muy suaves (como en la referencia) ── */}
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
            >
                <path
                    d="M700 -140 C 900 40 1120 20 1300 170 S 1570 330 1760 280"
                    fill="none"
                    stroke="#c9e9e4"
                    strokeWidth="70"
                    strokeLinecap="round"
                    opacity="0.5"
                />
                <path
                    d="M1030 -190 C 1230 -20 1300 120 1560 190 S 1780 320 1840 420"
                    fill="none"
                    stroke="#d6efeb"
                    strokeWidth="45"
                    strokeLinecap="round"
                    opacity="0.55"
                />
            </svg>

            {/* ── Contenido ── */}
            <div className="relative mx-auto grid w-full max-w-[1480px] items-start gap-[40px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.75fr)] lg:gap-[40px] xl:gap-[44px]">
                {/* Columna izquierda: texto */}
                <div className="lg:pl-[34px] lg:pt-[2px]">
                    <span
                        className="mb-[8px] block h-[2px] w-[64px] bg-brand-500"
                        aria-hidden="true"
                    />
                    <span className="block text-[0.95rem] font-semibold uppercase tracking-[0.32em] text-brand-500">
                        Soluciones especializadas
                    </span>

                    <h2 className="mt-[12px] text-[clamp(2rem,3.9vw,3.9rem)] font-bold leading-[1.05] tracking-[-0.025em] text-[#0c2b3d] [font-family:'Poppins','Montserrat',sans-serif]">
                        <span className="block whitespace-nowrap">Seguridad que</span>
                        <span className="block whitespace-nowrap">se adapta a tu</span>
                        <span className="block whitespace-nowrap text-brand-500">operación.</span>
                    </h2>

                    <p className="mt-[30px] max-w-[452px] text-[1.09rem] leading-[1.8] text-[#4d5a63]">
                        Diseñamos esquemas de protección de acuerdo con los riesgos, las
                        instalaciones y las necesidades de cada locatario y operación de la
                        Central.
                    </p>
                </div>

                {/* Columna derecha: cuadrícula de servicios */}
                <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:mt-[34px] lg:grid-cols-3 xl:gap-[24px]">
                    {SERVICIOS.map((servicio) => (
                        <Link
                            key={servicio.id}
                            to={`/servicios/${servicio.id}`}
                            aria-label={`Conocer servicio: ${servicio.titulo}`}
                            className="group relative flex h-full flex-col rounded-2xl bg-white px-[22px] pb-[18px] pt-[20px] shadow-[0_10px_30px_rgba(12,43,61,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(12,43,61,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50"
                        >
                            {/* Acento teal superior (asoma sobre la esquina izquierda) */}
                            <span
                                className="absolute left-0 top-[-3px] h-[9px] w-[29%] rounded-tl-[16px] rounded-tr-[7px] bg-brand-500"
                                aria-hidden="true"
                            />

                            <img
                                src={asset(servicio.iconoImagen)}
                                alt=""
                                aria-hidden="true"
                                loading="lazy"
                                className="h-[88px] w-[88px] shrink-0 xl:h-[94px] xl:w-[94px]"
                            />

                            <h3 className="mt-[14px] text-[1.22rem] font-semibold leading-[1.24] tracking-[-0.01em] text-[#0c2b3d] [font-family:'Poppins','Montserrat',sans-serif] lg:text-[clamp(1.08rem,1.25vw,1.25rem)]">
                                {servicio.titulo}
                            </h3>

                            <p className="mt-[12px] text-[0.845rem] leading-[1.68] text-[#57646e]">
                                {servicio.resumen}
                            </p>

                            <span className="mt-auto flex w-fit items-center gap-[8px] pt-[20px] text-[0.92rem] font-semibold text-brand-500 xl:text-[0.94rem]">
                                Conocer servicio
                                <i
                                    className="pi pi-arrow-right text-[0.72rem] transition-transform duration-300 group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </span>

                            {/* Filete menta inferior */}
                            <span
                                className="mt-[10px] block h-[3px] w-[72px] rounded-full bg-[#cfe9e4]"
                                aria-hidden="true"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiciosSection;
