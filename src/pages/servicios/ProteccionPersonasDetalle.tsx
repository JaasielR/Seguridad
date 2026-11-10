import React, { useEffect } from "react";
import { whatsappLink } from "../../data/empresa";

/**
 * Página de detalle — Protección a Personas.
 *
 * Réplica de la referencia /public/ref/5:
 *   - Fondo claro con ondas teal (`fondo_proteccion_fullhd_1920x1080.png`).
 *   - Insignia circular centrada, titular navy y subtítulo teal.
 *   - Dos tarjetas de servicios flanqueando una fotografía en arco (`f.jpg`).
 *   - Cuatro beneficios con iconos circulares.
 *   - Llamada a la acción a WhatsApp con líneas teal.
 *
 * Nota: Bootstrap se importa globalmente y sus utilidades de espaciado llevan
 * !important, por eso se usan valores arbitrarios de Tailwind.
 */

const asset = (ruta: string): string => `${import.meta.env.BASE_URL}${ruta}`;

/** Forma de arco: medio círculo arriba y esquinas suaves abajo. */
const ARCO = "50% 50% 16px 16px / 66% 66% 16px 16px";

const BENEFICIOS = [
    {
        icono: "ref/5/icon_escudo_check.png",
        titulo: "Personal Certificado",
        descripcion: "Guardias especializados y acreditados",
    },
    {
        icono: "ref/5/icon_reloj_247.png",
        titulo: "Disponibilidad 24/7",
        descripcion: "Cobertura continua a cualquier hora",
    },
    {
        icono: "ref/5/icon_pin.png",
        titulo: "Seguimiento en Tiempo Real",
        descripcion: "Monitoreo GPS y comunicación instantánea",
    },
    {
        icono: "ref/5/icon_corazon_escudo.png",
        titulo: "Enfoque Preventivo",
        descripcion: "Análisis de riesgo y prevención proactiva",
    },
];

interface TarjetaProps {
    icono: string;
    titulo: string;
    texto: string;
}

const Tarjeta: React.FC<TarjetaProps> = ({ icono, titulo, texto }) => (
    <article className="relative flex flex-col rounded-[clamp(18px,1.7vw,32px)] border border-[#8fd3cb]/60 bg-[linear-gradient(135deg,#e9f9f6_0%,#ddf4f1_55%,#d3efeb_100%)] px-[clamp(18px,1.62vw,31px)] py-[clamp(16px,1.35vw,26px)] shadow-[0_18px_45px_rgba(23,120,112,0.10)]">
        <img
            src={asset(icono)}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-[clamp(56px,4.6vw,88px)] w-[clamp(56px,4.6vw,88px)] object-contain"
        />

        <h3 className="mt-[clamp(10px,1.05vw,20px)] text-[clamp(1.15rem,1.46vw,1.75rem)] font-bold leading-[1.16] tracking-[-0.02em] text-[#0b2338]">
            {titulo}
        </h3>

        <p className="mt-[clamp(8px,0.8vw,15px)] text-[clamp(0.85rem,0.9vw,1.08rem)] font-medium leading-[1.42] text-[#22303f]">
            {texto}
        </p>
    </article>
);

const ProteccionPersonasDetalle: React.FC = () => {
    // Al entrar desde otra página, iniciar en la parte superior.
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    return (
        <section className="relative isolate w-full overflow-hidden bg-[#f7fbfa] text-[#151f2b] [font-family:'Montserrat',sans-serif]">
            {/* Fondo con ondas teal */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-[position:center_top] bg-no-repeat"
                style={{ backgroundImage: `url(${asset("ref/5/fondo_proteccion_fullhd_1920x1080.png")})` }}
                aria-hidden="true"
            />

            <div className="relative mx-auto w-full max-w-[1920px] px-[5.34%] pb-[clamp(34px,3.2vw,61px)] pt-[112px] sm:pt-[124px] lg:pt-[148px]">
                {/* ── Encabezado ── */}
                <header className="flex flex-col items-center text-center">
                    <img
                        src={asset("ref/5/icon_personas.png")}
                        alt=""
                        aria-hidden="true"
                        className="h-[clamp(96px,10.7vw,205px)] w-[clamp(96px,10.7vw,205px)] object-contain"
                    />

                    <h1 className="-mt-[clamp(8px,1.15vw,22px)] text-[clamp(1.65rem,4.05vw,4.86rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0b2338]">
                        Protección a Personas
                    </h1>

                    <p className="mt-[clamp(2px,0.42vw,8px)] text-[clamp(0.95rem,1.52vw,1.82rem)] font-bold leading-[1.25] text-[#1f9e94]">
                        Escolta y protección ejecutiva a locatarios y directivos
                    </p>
                </header>

                {/* ── Tarjetas + fotografía en arco ── */}
                <div className="mx-auto mt-[clamp(26px,2.1vw,40px)] flex w-full max-w-[620px] flex-col gap-[clamp(18px,1.6vw,30px)] lg:grid lg:max-w-none lg:w-[86.2%] lg:grid-cols-[34%_30%_34%] lg:items-center lg:justify-between lg:gap-0">
                    <Tarjeta
                        icono="ref/5/icon_camion_valores.png"
                        titulo="Acompañamiento en traslado de valores y nómina"
                        texto="Traslado seguro de efectivo y documentos sensibles, vehículos blindados, custodia especializada y coordinación logística 24/7 para pagos de nómina y valores."
                    />

                    <div
                        className="relative order-first w-full shrink-0 lg:order-none lg:w-full"
                        style={{ aspectRatio: "1.32 / 1" }}
                    >
                        <div
                            className="h-full w-full overflow-hidden bg-[#dbeef1] ring-1 ring-[#8fd6cc] ring-offset-[3px] ring-offset-[#fbfdfc]"
                            style={{ borderRadius: ARCO }}
                        >
                            <img
                                src={asset("f.jpg")}
                                alt="Guardia de seguridad acompañando a un directivo durante su traslado en la Central de Abastos"
                                className="h-full w-full object-cover object-[50%_26%]"
                            />
                        </div>
                    </div>

                    <Tarjeta
                        icono="ref/5/icon_escudo_rayo.png"
                        titulo="Protocolos de evacuación y rutas seguras"
                        texto="Planificación de rutas seguras, protocolos de evacuación de emergencia, escolta táctica y respuesta inmediata ante incidentes, priorizando la seguridad en todo momento."
                    />
                </div>

                {/* ── Beneficios ── */}
                <h2 className="mt-[clamp(26px,1.9vw,36px)] text-center text-[clamp(1.2rem,1.65vw,1.98rem)] font-bold leading-[1.2] text-[#0b2338]">
                    Beneficios del Servicio
                </h2>

                <div className="mx-auto mt-[clamp(16px,1.15vw,22px)] grid w-full grid-cols-2 gap-x-[clamp(12px,1.5vw,30px)] gap-y-[clamp(22px,2vw,38px)] lg:w-[88%] lg:grid-cols-4 min-[1800px]:w-[77.9%]">
                    {BENEFICIOS.map((beneficio) => (
                        <div key={beneficio.titulo} className="flex flex-col items-center text-center">
                            <img
                                src={asset(beneficio.icono)}
                                alt=""
                                aria-hidden="true"
                                loading="lazy"
                                className="h-[clamp(74px,6.4vw,123px)] w-[clamp(74px,6.4vw,123px)] object-contain"
                            />
                            <h3 className="mt-[clamp(8px,0.95vw,18px)] text-[clamp(0.9rem,1.08vw,1.18rem)] font-bold leading-[1.2] text-[#0b2338]">
                                {beneficio.titulo}
                            </h3>
                            <p className="mt-[clamp(3px,0.32vw,6px)] text-[clamp(0.82rem,0.98vw,1.18rem)] font-medium leading-[1.35] text-[#22303f]">
                                {beneficio.descripcion}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── Llamada a la acción ── */}
                <div className="mt-[clamp(22px,1.6vw,30px)] flex items-center justify-center gap-[clamp(10px,2.4vw,46px)]">
                    <div
                        className="h-[2px] w-[clamp(34px,12vw,230px)] bg-[linear-gradient(90deg,rgba(31,158,148,0),#1f9e94)]"
                        aria-hidden="true"
                    />

                    <a
                        href={whatsappLink(
                            "Hola, deseo información sobre el servicio de Protección a Personas."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-[clamp(8px,0.8vw,15px)] rounded-full bg-[#0d2b45] px-[clamp(24px,2.7vw,52px)] py-[clamp(10px,1.05vw,20px)] text-[clamp(0.98rem,1.35vw,1.62rem)] font-bold leading-[1.1] text-white !text-white ring-2 ring-[#1f9e94] shadow-[0_0_0_6px_rgba(31,158,148,0.12),0_14px_32px_rgba(13,43,69,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#113b5c] hover:!text-white hover:shadow-[0_0_0_7px_rgba(31,158,148,0.18),0_18px_38px_rgba(13,43,69,0.45)]"
                    >
                        Solicitar Servicio
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-[0.9em] w-[0.9em]"
                            aria-hidden="true"
                        >
                            <path d="M4 12h16M13 5l7 7-7 7" />
                        </svg>
                    </a>

                    <div
                        className="h-[2px] w-[clamp(34px,12vw,230px)] bg-[linear-gradient(270deg,rgba(31,158,148,0),#1f9e94)]"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProteccionPersonasDetalle;
