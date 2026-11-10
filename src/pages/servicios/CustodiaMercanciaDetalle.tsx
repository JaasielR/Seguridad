import React, { useEffect } from "react";
import { whatsappLink } from "../../data/empresa";

/**
 * Página de detalle — Custodia de Mercancía.
 *
 * Réplica de la referencia del servicio:
 *   - Fondo claro con hexágonos mint (`fondo_custodia_fullhd_1920x1080.png`).
 *   - Insignia de apretón de manos, titular navy y subtítulo teal centrados.
 *   - Fotografía ancha (`e.jpg`) con esquina geométrica teal.
 *   - Cuatro tarjetas numeradas con los alcances del servicio.
 *   - Banda teal inferior con tres beneficios y CTA a WhatsApp.
 *
 * Nota: Bootstrap se importa globalmente y sus utilidades de espaciado llevan
 * !important, por eso se usan valores arbitrarios de Tailwind.
 */

const asset = (ruta: string): string => `${import.meta.env.BASE_URL}${ruta}`;

const TARJETAS = [
    {
        numero: "1",
        titulo: "Custodia dentro y fuera de la Central",
        texto: "Protección desde punto de origen hasta destino, control total y revisión de carga",
    },
    {
        numero: "2",
        titulo: "Traslados seguros",
        texto: "Rutas predeterminadas y escolta profesional, protocolos de seguridad en cada tramo",
    },
    {
        numero: "3",
        titulo: "Unidades equipadas con torreta y faro buscador nocturno",
        texto: "Vehículos con luces de emergencia, faro buscador y comunicación inmediata 24/7",
    },
    {
        numero: "4",
        titulo: "Monitoreo 24/7",
        texto: "Seguimiento en tiempo real desde centro de control, alerta y respuesta inmediata",
    },
];

const BENEFICIOS = [
    { icono: "ref/7/trim/icon_custodia_escudo.png", texto: "Respuesta Inmediata" },
    { icono: "ref/7/trim/icon_custodia_247.png", texto: "Monitoreo 24/7" },
    { icono: "ref/7/trim/icon_custodia_grafica.png", texto: "Prevención Efectiva" },
];

const CustodiaMercanciaDetalle: React.FC = () => {
    // Al entrar desde otra página, iniciar en la parte superior.
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    return (
        <section className="relative isolate w-full overflow-hidden bg-[#f7fbfa] text-[#0b2338] [font-family:'Montserrat',sans-serif]">
            {/* Fondo con hexágonos mint */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${asset("ref/7/fondo_custodia_fullhd_1920x1080.png")})` }}
                aria-hidden="true"
            />

            <div className="relative mx-auto w-full max-w-[1920px] px-[6%] pt-[clamp(92px,5.3vw,104px)] sm:px-[7%] xl:px-[7.5%]">
                {/* ── Encabezado ── */}
                <header className="flex flex-col items-center text-center">
                    <img
                        src={asset("ref/7/trim/icon_custodia_apreton.png")}
                        alt=""
                        aria-hidden="true"
                        className="h-[clamp(58px,4.55vw,88px)] w-[clamp(58px,4.55vw,88px)] object-contain"
                    />

                    <h1 className="mt-[clamp(8px,0.95vw,18px)] text-[clamp(2.05rem,4.65vw,5.6rem)] font-extrabold leading-[0.98] tracking-[-0.025em] text-[#0b2338]">
                        Custodia de Mercancía
                    </h1>

                    <p className="mt-[clamp(4px,0.55vw,10px)] text-[clamp(0.92rem,1.72vw,2.06rem)] font-bold leading-[1.15] text-[#0b8f8d]">
                        Traslados seguros dentro y fuera de la Central
                    </p>
                </header>

                {/* ── Fotografía principal ── */}
                <div className="relative mx-auto mt-[clamp(14px,1.15vw,22px)] aspect-[16/9] w-full overflow-hidden rounded-[clamp(12px,1.25vw,24px)] shadow-[0_18px_44px_rgba(10,60,70,0.18)] sm:aspect-[2.6/1] lg:aspect-[3.87/1] lg:w-[61%]">
                    <img
                        src={asset("e.jpg")}
                        alt="Guardias de Seguridad Interna recorriendo los pasillos de la Central de Abastos"
                        className="h-full w-full object-cover object-[50%_42%]"
                    />

                    {/* Esquina geométrica teal sobre la fotografía */}
                    <div
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(120,231,215,0.34)_0%,rgba(120,231,215,0.16)_45%,rgba(120,231,215,0)_70%)]"
                        style={{ clipPath: "polygon(0 42%, 0 100%, 42% 100%)" }}
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(0,163,163,0.92)_0%,rgba(0,163,163,0.55)_70%,rgba(0,163,163,0)_100%)]"
                        style={{ clipPath: "polygon(0 66%, 0 100%, 24% 100%)" }}
                        aria-hidden="true"
                    />
                </div>

                {/* ── Tarjetas numeradas ── */}
                <div className="mt-[clamp(32px,2.6vw,50px)] grid grid-cols-1 gap-x-[2.3%] gap-y-[clamp(46px,3.2vw,62px)] sm:grid-cols-2 xl:grid-cols-4">
                    {TARJETAS.map((tarjeta) => (
                        <article
                            key={tarjeta.numero}
                            className="relative rounded-[clamp(14px,1.15vw,22px)] bg-white px-[clamp(16px,1.35vw,26px)] pb-[clamp(16px,1.55vw,30px)] pt-[clamp(50px,3.85vw,74px)] text-center shadow-[0_14px_34px_rgba(10,60,70,0.13)]"
                        >
                            <span
                                className="absolute left-1/2 top-0 flex h-[clamp(56px,4vw,77px)] w-[clamp(56px,4vw,77px)] -translate-x-1/2 -translate-y-[30%] items-center justify-center rounded-full border-[clamp(2px,0.16vw,3px)] border-[#17c9c2] bg-[#e9faf0] text-[clamp(1.7rem,2.15vw,2.7rem)] font-extrabold leading-none text-[#0b2338] shadow-[0_6px_16px_rgba(0,120,120,0.18)]"
                                aria-hidden="true"
                            >
                                {tarjeta.numero}
                            </span>

                            <h3 className="text-[clamp(1rem,1.25vw,1.55rem)] font-bold leading-[1.15] tracking-[-0.01em] text-[#0b2338]">
                                {tarjeta.titulo}
                            </h3>
                            <p className="mt-[clamp(6px,0.6vw,12px)] text-[clamp(0.85rem,0.91vw,1.12rem)] font-semibold leading-[1.32] text-[#16283a]">
                                {tarjeta.texto}
                            </p>
                        </article>
                    ))}
                </div>
            </div>

            {/* ── Banda teal inferior ── */}
            <div className="relative mt-[clamp(36px,3.9vw,74px)] w-full bg-[linear-gradient(90deg,#009a93_0%,#0eb29b_55%,#3ec49c_100%)]">
                <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center gap-[clamp(16px,2vw,36px)] px-[6%] py-[clamp(18px,1.3vw,25px)] sm:px-[8%] lg:flex-row lg:justify-between lg:pl-[15%] lg:pr-[13%]">
                    <div className="grid w-full grid-cols-3 place-items-center gap-[clamp(10px,4vw,72px)] lg:flex lg:w-auto lg:items-center lg:gap-[clamp(30px,7.8vw,150px)]">
                        {BENEFICIOS.map((beneficio) => (
                            <div
                                key={beneficio.texto}
                                className="flex flex-col items-center text-center"
                            >
                                <img
                                    src={asset(beneficio.icono)}
                                    alt=""
                                    aria-hidden="true"
                                    className="h-[clamp(44px,3.5vw,67px)] w-[clamp(44px,3.5vw,67px)] object-contain"
                                />
                                <span className="mt-[clamp(4px,0.4vw,8px)] text-[clamp(0.66rem,0.9vw,1.1rem)] font-semibold leading-[1.15] text-[#0b2338]">
                                    {beneficio.texto}
                                </span>
                            </div>
                        ))}
                    </div>

                    <a
                        href={whatsappLink(
                            "Hola, deseo información sobre el servicio de Custodia de Mercancía."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full max-w-[420px] items-center justify-center gap-[clamp(8px,0.8vw,15px)] rounded-full bg-[#0b2338] px-[clamp(24px,2.3vw,44px)] py-[clamp(12px,0.85vw,16px)] text-[clamp(1rem,1.4vw,1.7rem)] font-bold leading-[1.1] text-white !text-white shadow-[0_12px_26px_rgba(5,25,45,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12334c] hover:!text-white hover:shadow-[0_16px_32px_rgba(5,25,45,0.36)] lg:w-auto lg:max-w-none"
                    >
                        Solicitar Servicio
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-[0.8em] w-[0.8em]"
                            aria-hidden="true"
                        >
                            <path d="M4 12h16M13 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CustodiaMercanciaDetalle;
