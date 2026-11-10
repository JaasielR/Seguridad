import React, { useEffect } from "react";
import { whatsappLink } from "../../data/empresa";

/**
 * Página de detalle — Video Vigilancia CCTV.
 *
 * Réplica de la referencia /public/ref/4:
 *   - Fondo claro con geometría teal/navy y edificio (`fondo_con_edificio_1920x1080.png`).
 *   - Insignia circular con cámara, titular navy y subtítulo.
 *   - Columna izquierda: divisor teal, descripción y garantías con check.
 *   - Columna derecha: fotografía real (`a.jpg`) con insignia escudo-candado.
 *   - Panel translúcido con cuatro ventajas y llamada a la acción a WhatsApp.
 *
 * Nota: Bootstrap se importa globalmente y sus utilidades de espaciado llevan
 * !important, por eso se usan valores arbitrarios de Tailwind.
 */

const asset = (ruta: string): string => `${import.meta.env.BASE_URL}${ruta}`;

const GARANTIAS = [
    "Monitoreo 24/7 desde centro de control",
    "Cámaras de alta resolución",
    "Visión nocturna e infrarroja",
    "Grabación y respaldo de evidencia",
];

const VENTAJAS = [
    {
        icono: "ref/4/icono_reloj_respuesta.png",
        lineas: ["Respuesta", "Inmediata"],
    },
    {
        icono: "ref/4/icono_escudo_check.png",
        lineas: ["Mayor Seguridad"],
    },
    {
        icono: "ref/4/icono_apreton_manos.png",
        lineas: ["Protección Profesional"],
    },
    {
        icono: "ref/4/icono_grafica_prevencion.png",
        lineas: ["Prevención Efectiva"],
    },
];

/** Check blanco dentro del círculo teal. */
const CheckIcono: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-full w-full">
        <path
            d="M5.5 12.5 10 17l8.5-9"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const VideoVigilanciaDetalle: React.FC = () => {
    // Al entrar desde otra página, iniciar en la parte superior.
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    return (
        <section className="relative isolate w-full overflow-hidden bg-[#eff7f8] text-[#151f2b] [font-family:'Montserrat',sans-serif]">
            {/* Fondo claro con geometría y edificio */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-[position:20%_bottom] bg-no-repeat sm:bg-[position:center_top]"
                style={{ backgroundImage: `url(${asset("ref/4/fondo_con_edificio_1920x1080.png")})` }}
                aria-hidden="true"
            />

            <div className="relative mx-auto w-full max-w-[1920px] px-[5.34%] pb-[clamp(30px,2.5vw,48px)] pt-[112px] sm:pt-[124px] lg:pt-[148px]">
                {/* ── Encabezado + fotografía ── */}
                <div className="grid items-start gap-[clamp(24px,2.6vw,50px)] lg:grid-cols-[43.3%_50.7%] lg:justify-between lg:gap-0">
                    <div className="min-w-0">
                        {/* Insignia y titular */}
                        <div className="flex items-start gap-[clamp(12px,0.94vw,18px)] lg:mt-[clamp(4px,0.73vw,14px)]">
                            <span className="flex h-[clamp(64px,9.1vw,175px)] w-[clamp(64px,9.1vw,175px)] shrink-0 items-center justify-center rounded-full bg-[#d3f1ef] shadow-[0_2px_12px_rgba(20,158,153,0.10)]">
                                <img
                                    src={asset("ref/4/icono_camara_cctv.png")}
                                    alt=""
                                    aria-hidden="true"
                                    className="h-[58%] w-[58%] object-contain"
                                />
                            </span>

                            <div className="min-w-0 flex-1 lg:pt-[clamp(2px,0.99vw,19px)]">
                                <h1 className="m-0 text-[clamp(1.55rem,3.29vw,3.95rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#08223b]">
                                    <span className="block">Video Vigilancia</span>
                                    <span className="block">CCTV</span>
                                </h1>

                                <p className="mt-[clamp(9px,0.99vw,19px)] max-w-[34em] text-[clamp(0.92rem,1.28vw,1.54rem)] font-medium leading-[1.36] text-[#22303f]">
                                    Monitoreo inteligente para una seguridad
                                    <br className="hidden sm:block" /> más efectiva y en tiempo real.
                                </p>
                            </div>
                        </div>

                        {/* Divisor teal */}
                        <div
                            className="mt-[clamp(16px,1.56vw,30px)] h-[4px] w-[clamp(90px,9.7vw,186px)] bg-[#149e99]"
                            aria-hidden="true"
                        />

                        {/* Descripción */}
                        <p className="mt-[clamp(14px,1.56vw,30px)] text-[clamp(0.92rem,1.18vw,1.42rem)] font-medium leading-[1.5] text-[#151f2b]">
                            Sistemas CCTV analógicos e IP con monitoreo 24/7 desde nuestro centro de
                            control certificado, cámaras de alta resolución con visión nocturna e
                            infrarroja, para una vigilancia continua y confiable en todas las áreas de
                            la Central.
                        </p>

                        {/* Garantías */}
                        <ul className="m-0 mt-[clamp(18px,1.72vw,33px)] flex list-none flex-col gap-[clamp(6px,0.55vw,10.5px)] p-0">
                            {GARANTIAS.map((garantia) => (
                                <li key={garantia} className="flex items-center gap-[clamp(8px,0.8vw,15px)]">
                                    <span className="h-[clamp(20px,1.77vw,34px)] w-[clamp(20px,1.77vw,34px)] shrink-0 rounded-full bg-[#149e99] p-[clamp(3px,0.26vw,5px)]">
                                        <CheckIcono />
                                    </span>
                                    <span className="text-[clamp(0.88rem,1.17vw,1.4rem)] font-medium leading-[1.3] text-[#151f2b]">
                                        {garantia}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Fotografía con insignia de escudo */}
                    <div className="relative min-w-0">
                        <div className="overflow-hidden rounded-[clamp(16px,1.82vw,35px)] shadow-[0_20px_45px_rgba(8,34,59,0.16)] ring-1 ring-[#ffffff]/80">
                            <img
                                src={asset("a.jpg")}
                                alt="Patio de maniobras vigilado por el sistema de cámaras CCTV durante la noche"
                                className="aspect-[1.4/1] w-full object-cover object-[50%_55%]"
                            />
                        </div>

                        <img
                            src={asset("ref/4/icono_escudo_candado.png")}
                            alt=""
                            aria-hidden="true"
                            className="absolute bottom-[2.4%] right-[0.7%] h-[clamp(68px,10.2vw,196px)] w-auto drop-shadow-[0_12px_24px_rgba(3,24,38,0.45)]"
                        />
                    </div>
                </div>

                {/* ── Panel de ventajas ── */}
                <div className="mt-[clamp(18px,1.56vw,30px)] rounded-[clamp(22px,3.3vw,64px)] border border-[#ffffff]/80 bg-[rgba(255,255,255,0.55)] px-[clamp(10px,2.2vw,42px)] py-[clamp(12px,1.5vw,29px)] shadow-[0_18px_45px_rgba(8,34,59,0.10)] backdrop-blur-md">
                    <ul className="m-0 grid list-none grid-cols-2 gap-y-[clamp(14px,1.6vw,30px)] p-0 lg:grid-cols-4 lg:gap-y-0">
                        {VENTAJAS.map((ventaja, index) => (
                            <li
                                key={ventaja.lineas.join(" ")}
                                className={`flex items-center justify-center gap-[clamp(8px,1.1vw,21px)] px-[clamp(4px,0.8vw,16px)] ${
                                    index > 0
                                        ? "lg:border-l lg:border-[#b9cbd1]/70"
                                        : ""
                                }`}
                            >
                                <img
                                    src={asset(ventaja.icono)}
                                    alt=""
                                    aria-hidden="true"
                                    loading="lazy"
                                    className="h-[clamp(38px,3.96vw,76px)] w-[clamp(38px,3.96vw,76px)] shrink-0 object-contain"
                                />
                                <p className="m-0 text-[clamp(0.8rem,1.07vw,1.29rem)] font-semibold leading-[1.2] text-[#08223b]">
                                    {ventaja.lineas.map((linea) => (
                                        <span key={linea} className="block">
                                            {linea}
                                        </span>
                                    ))}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── Llamada a la acción ── */}
                <div className="mt-[clamp(20px,2.03vw,39px)] flex items-center justify-center gap-[clamp(10px,2.4vw,46px)]">
                    <div
                        className="h-[2px] w-[clamp(30px,14vw,270px)] bg-[linear-gradient(90deg,rgba(20,158,153,0),#149e99)]"
                        aria-hidden="true"
                    />

                    <a
                        href={whatsappLink(
                            "Hola, deseo información sobre el servicio de Video Vigilancia CCTV."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-[clamp(8px,0.8vw,15px)] rounded-full bg-[#062b45] px-[clamp(24px,2.7vw,52px)] py-[clamp(10px,1.15vw,22px)] text-[clamp(0.98rem,1.23vw,1.48rem)] font-bold leading-[1.1] text-white !text-white ring-2 ring-[#149e99] shadow-[0_12px_30px_rgba(6,43,69,0.35),0_0_0_6px_rgba(20,158,153,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#083a5b] hover:!text-white hover:shadow-[0_16px_36px_rgba(6,43,69,0.45),0_0_0_7px_rgba(20,158,153,0.16)]"
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
                        className="h-[2px] w-[clamp(30px,14vw,270px)] bg-[linear-gradient(270deg,rgba(20,158,153,0),#149e99)]"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </section>
    );
};

export default VideoVigilanciaDetalle;
