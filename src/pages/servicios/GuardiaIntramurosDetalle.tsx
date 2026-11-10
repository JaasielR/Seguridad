import React, { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Página de detalle — Guardia Intramuros.
 *
 * Réplica de la referencia `/home/jass/Descargas/t.jpg`:
 *   - Fondo geométrico teal (`fondo_intramuros_v2_fullhd_1920x1080.png`).
 *   - Fotografía vertical a la izquierda (`f.jpg`) con corte diagonal.
 *   - Titular y subtítulo sobre la mitad derecha.
 *   - Tres tarjetas: Control de Accesos, Rondines Constantes y Primeros Auxilios.
 *   - Párrafo descriptivo y panel "Incluye" con cinco puntos y CTA a WhatsApp.
 *
 * Nota: Bootstrap se importa globalmente y sus utilidades de espaciado llevan
 * !important, por eso se usan valores arbitrarios de Tailwind.
 */

const asset = (ruta: string): string => `${import.meta.env.BASE_URL}${ruta}`;

const TARJETAS = [
    {
        icono: "ref/6/trim/icon_puerta_final.png",
        titulo: "Control de Accesos",
        texto: "Identificación de amenazas",
    },
    {
        icono: "ref/6/trim/icon_persona_caminando_v2.png",
        titulo: "Rondines Constantes",
        texto: "Recorridos programados y respuesta inmediata",
    },
    {
        icono: "ref/6/trim/icon_cruz_v2.png",
        titulo: "Primeros Auxilios",
        texto: "Atención médica inicial y protocolos de emergencia",
    },
];

const INCLUYE = [
    "Control de ingreso y registro de visitantes",
    "Monitoreo de accesos restringidos 24/7",
    "Rondines periódicos documentados",
    "Protocolo de respuesta inmediata",
    "Reporte diario de incidencias",
];

const GuardiaIntramurosDetalle: React.FC = () => {
    // Al entrar desde otra página, iniciar en la parte superior.
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    return (
        <section className="relative isolate w-full overflow-hidden bg-[#f7fbfa] text-[#0b2338] [font-family:'Montserrat',sans-serif]">
            {/* Fondo geométrico con banda teal: se multiplica sobre la foto para
                que la fotografía parezca quedar por detrás del fondo */}
            <div
                className="pointer-events-none absolute inset-0 -z-[5] bg-cover bg-center bg-no-repeat mix-blend-multiply"
                style={{ backgroundImage: `url(${asset("ref/6/fondo_intramuros_v2_fullhd_1920x1080.png")})` }}
                aria-hidden="true"
            />

            {/* Fotografía vertical de la izquierda (escritorio) */}
            <div
                className="pointer-events-none absolute left-0 top-0 -z-10 hidden h-full w-[33%] overflow-hidden xl:block"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)",
                }}
                aria-hidden="true"
            >
                <img
                    src={asset("x.jpg")}
                    alt=""
                    className="h-full w-full object-cover object-center"
                />
                {/* Velo teal que funde el borde de la foto con la banda del fondo */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,163,163,0)_58%,rgba(0,163,163,0.42)_84%,rgba(0,190,188,0.86)_100%)]" />
            </div>

            <div className="relative mx-auto w-full max-w-[1920px] px-[5.34%] pb-[clamp(34px,2.7vw,52px)] pt-[112px] sm:pt-[124px] xl:pl-[32%] xl:pr-[3%] xl:pt-[clamp(140px,8.65vw,166px)]">
                {/* Fotografía en banner (móvil y tablet) */}
                <div className="mb-[clamp(22px,4vw,34px)] overflow-hidden rounded-[clamp(16px,3vw,28px)] ring-1 ring-[#8fd8d4] xl:hidden">
                    <img
                        src={asset("x.jpg")}
                        alt="Guardia de seguridad en el acceso de las instalaciones"
                        className="h-[clamp(230px,50vw,420px)] w-full object-cover object-[50%_15%]"
                    />
                </div>

                {/* ── Encabezado ── */}
                <header className="text-center xl:ml-auto xl:w-[74%]">
                    <h1 className="text-[clamp(2rem,4.8vw,5.75rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-[#0b2338]">
                        Guardia Intramuros
                    </h1>
                    <p className="mt-[clamp(6px,1vw,20px)] text-[clamp(0.95rem,1.53vw,1.85rem)] font-semibold leading-[1.2] text-[#0b2338]">
                        Protección, control y reacción al interior de las instalaciones.
                    </p>
                </header>

                {/* ── Tarjetas de servicio ── */}
                <div className="mt-[clamp(30px,4.6vw,88px)] grid gap-[clamp(14px,1.6vw,30px)] sm:grid-cols-2 xl:grid-cols-3">
                    {TARJETAS.map((tarjeta) => (
                        <article
                            key={tarjeta.titulo}
                            className="flex items-center gap-[clamp(10px,1.25vw,24px)] rounded-[clamp(16px,1.35vw,26px)] border border-[#9addd9] bg-[linear-gradient(135deg,#eefafa_0%,#e3f7f6_55%,#d9f2f1_100%)] px-[clamp(14px,0.95vw,18px)] py-[clamp(18px,3.1vw,60px)] shadow-[0_14px_32px_rgba(10,90,90,0.10)] sm:last:col-span-2 xl:min-h-[clamp(200px,13.7vw,263px)] xl:last:col-span-1"
                        >
                            <img
                                src={asset(tarjeta.icono)}
                                alt=""
                                aria-hidden="true"
                                className="h-[clamp(48px,4.5vw,86px)] w-[clamp(48px,4.5vw,86px)] shrink-0 object-contain"
                            />
                            <div className="min-w-0">
                                <h3 className="text-[clamp(0.95rem,1.25vw,1.5rem)] font-bold leading-[1.12] tracking-[-0.02em] text-[#0b2338]">
                                    {tarjeta.titulo}
                                </h3>
                                <p className="mt-[clamp(4px,0.45vw,9px)] text-[clamp(0.8rem,0.95vw,1.14rem)] font-medium leading-[1.32] text-[#1b2b3a]">
                                    {tarjeta.texto}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* ── Descripción + panel "Incluye" ── */}
                <div className="mt-[clamp(22px,2.2vw,42px)] grid items-center gap-[clamp(18px,1.2vw,24px)] xl:grid-cols-[42%_58%] xl:gap-[1%]">
                    <p className="text-[clamp(0.95rem,1.42vw,1.7rem)] font-semibold leading-[1.4] text-[#0b2338]">
                        Protección integral para tus instalaciones. Nuestro servicio está diseñado
                        para garantizar seguridad constante 24/7 con personal capacitado y respuesta
                        inmediata para tu equipo, activos y operación diaria.
                    </p>

                    <div className="rounded-[clamp(16px,1.45vw,28px)] border border-[#9addd9] bg-[linear-gradient(150deg,#eefaf9_0%,#e2f6f5_55%,#d6f1f0_100%)] px-[clamp(18px,3vw,58px)] pb-[clamp(12px,0.85vw,16px)] pt-[clamp(16px,2vw,38px)] shadow-[0_18px_40px_rgba(10,90,90,0.12)]">
                        <div className="flex items-center gap-[clamp(8px,0.7vw,14px)]">
                            <img
                                src={asset("ref/6/trim/icon_escudo_v2.png")}
                                alt=""
                                aria-hidden="true"
                                className="h-[clamp(38px,2.7vw,52px)] w-[clamp(38px,2.7vw,52px)] object-contain"
                            />
                            <h2 className="text-[clamp(1.25rem,2vw,2.35rem)] font-bold leading-[1.1] text-[#0b2338]">
                                Incluye
                            </h2>
                        </div>

                        <ul className="mt-[clamp(10px,1vw,18px)] space-y-[clamp(6px,0.6vw,11px)]">
                            {INCLUYE.map((punto) => (
                                <li key={punto} className="flex items-start gap-[clamp(8px,0.75vw,14px)]">
                                    <img
                                        src={asset("ref/6/trim/icon_check_final.png")}
                                        alt=""
                                        aria-hidden="true"
                                        className="mt-[0.12em] h-[clamp(16px,1.4vw,27px)] w-[clamp(16px,1.4vw,27px)] shrink-0 object-contain"
                                    />
                                    <span className="text-[clamp(0.85rem,1.25vw,1.5rem)] font-medium leading-[1.3] text-[#16283a]">
                                        {punto}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/contacto"
                            className="mt-[clamp(12px,1.1vw,21px)] flex w-full items-center justify-center gap-[clamp(8px,0.8vw,15px)] rounded-full bg-[#009194] px-[clamp(18px,2vw,38px)] py-[clamp(9px,1.05vw,20px)] text-[clamp(1rem,1.55vw,1.85rem)] font-bold leading-[1.1] text-white !text-white shadow-[0_10px_24px_rgba(0,120,124,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00a6aa] hover:!text-white hover:shadow-[0_14px_30px_rgba(0,120,124,0.40)]"
                        >
                            Solicitar Servicio
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-[0.85em] w-[0.85em]"
                                aria-hidden="true"
                            >
                                <path d="M4 12h16M13 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuardiaIntramurosDetalle;
