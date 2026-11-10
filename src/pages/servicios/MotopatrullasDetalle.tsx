import React, { useEffect } from "react";
import { whatsappLink } from "../../data/empresa";

/**
 * Página de detalle — Motopatrullas DM 250.
 *
 * Réplica de la referencia /public/ref/2:
 *   - Fondo claro con las franjas diagonales de `fondo_motopatrullas_1920x1080_v2.jpg`.
 *   - Columna izquierda: insignia circular, titular navy de dos líneas, subtítulo
 *     teal, párrafo descriptivo y lista de beneficios con check.
 *   - Columna derecha: fotografía enmarcada en blanco con la insignia flotante.
 *   - Panel translúcido con las 4 ventajas y botón teal de WhatsApp.
 *
 * Los iconos de /public/ref/2/proc son los cutouts originales recortados a su
 * círculo y recoloreados a los tonos exactos de la referencia.
 *
 * Nota: Bootstrap se importa globalmente y sus utilidades de espaciado llevan
 * !important, por eso se usan valores arbitrarios de Tailwind.
 */

const asset = (ruta: string): string => `${import.meta.env.BASE_URL}${ruta}`;

const BENEFICIOS = [
    "Patrullaje en andenes y zonas de carga",
    "Respuesta inmediata ante incidentes",
    "Prevención de robo a carga y transporte",
    "Unidades equipadas y personal capacitado",
];

const VENTAJAS = [
    {
        icono: "ref/2/proc/reloj.png",
        titulo: "Respuesta Inmediata",
        descripcion: "Acción rápida ante incidentes",
    },
    {
        icono: "ref/2/proc/escudo.png",
        titulo: "Mayor Seguridad",
        descripcion: "Prevención y vigilancia constante",
    },
    {
        icono: "ref/2/proc/handshake.png",
        titulo: "Protección Profesional",
        descripcion: "Personal entrenado y certificado",
    },
    {
        icono: "ref/2/proc/grafica.png",
        titulo: "Prevención Efectiva",
        descripcion: "Reducción de riesgos de robo",
    },
];

const MotopatrullasDetalle: React.FC = () => {
    // Al entrar desde otra página, iniciar en la parte superior.
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    return (
        <section className="relative isolate w-full overflow-hidden bg-[#fbfcfc] [font-family:'Source_Sans_3','Source_Sans_Pro',sans-serif]">
            {/* Fondo con franjas diagonales */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-[position:center_top] bg-no-repeat"
                style={{ backgroundImage: `url(${asset("ref/2/fondo_motopatrullas_1920x1080_v2.jpg")})` }}
                aria-hidden="true"
            />

            <div className="relative mx-auto w-full max-w-[1740px] px-[20px] pb-[clamp(30px,2vw,40px)] pt-[112px] sm:px-[32px] lg:px-[56px] lg:pt-[148px]">
                <div className="grid items-start gap-[38px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.04fr)] lg:gap-[32px]">
                    {/* ── Columna izquierda ── */}
                    <div>
                        <div className="flex items-start gap-[clamp(14px,1.95vw,38px)]">
                            <img
                                src={asset("ref/2/proc/moto.png")}
                                alt=""
                                aria-hidden="true"
                                className="mt-[clamp(3px,0.95vw,18px)] h-[clamp(78px,7.03vw,124px)] w-[clamp(78px,7.03vw,124px)] shrink-0"
                            />

                            <div className="min-w-0">
                                <h1 className="m-0 text-[clamp(2rem,5vw,5.4rem)] font-bold leading-[0.96] tracking-[-0.015em] text-[#041c36] [font-family:'Source_Sans_3','Source_Sans_Pro',sans-serif]">
                                    Motopatrullas
                                    <br />
                                    DM 250
                                </h1>

                                <p className="mt-[clamp(6px,0.6vw,12px)] text-[clamp(0.98rem,1.56vw,1.75rem)] font-bold leading-[1.15] text-[#0e8b87]">
                                    Respuesta inmediata en andenes y zonas de carga
                                </p>
                            </div>
                        </div>

                        <p className="mt-[clamp(18px,2.2vw,42px)] max-w-[clamp(300px,40vw,43rem)] text-[clamp(0.95rem,1.25vw,1.4rem)] leading-[1.35] text-[#0c1724]">
                            Unidades de motocicleta para patrullaje en andenes y zonas de
                            carga, con enfoque en respuesta rápida y prevención de robo de
                            carga y transporte. Nuestro equipo está capacitado para actuar
                            en minutos, garantizando seguridad constante en tus áreas
                            operativas.
                        </p>

                        <ul className="mt-[clamp(20px,2.7vw,52px)] list-none space-y-[clamp(8px,0.63vw,12px)] p-0">
                            {BENEFICIOS.map((beneficio) => (
                                <li
                                    key={beneficio}
                                    className="flex items-center gap-[clamp(14px,3.45vw,66px)]"
                                >
                                    <span
                                        className="flex h-[clamp(24px,1.93vw,2.1rem)] w-[clamp(24px,1.93vw,2.1rem)] shrink-0 items-center justify-center rounded-full bg-[#0f8b87]"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#ffffff"
                                            strokeWidth="3.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-[58%] w-[58%]"
                                        >
                                            <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
                                        </svg>
                                    </span>
                                    <span className="text-[clamp(0.95rem,1.35vw,1.5rem)] leading-[1.25] text-[#0c1724]">
                                        {beneficio}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Columna derecha: fotografía ── */}
                    <div className="relative lg:-mt-[6px]">
                        <div className="overflow-hidden rounded-[clamp(18px,1.46vw,28px)] border-[clamp(5px,0.52vw,10px)] border-white bg-white shadow-[0_24px_60px_rgba(10,35,55,0.18),0_4px_14px_rgba(10,35,55,0.08)]">
                            <img
                                src={asset("c.jpg")}
                                alt="Motopatrulla de seguridad interna en la Central de Abastos Ecatepec"
                                className="aspect-[1.38/1] w-full object-cover object-[50%_40%]"
                            />
                        </div>

                        {/* Insignia flotante sobre la esquina superior derecha */}
                        <img
                            src={asset("ref/2/proc/moto.png")}
                            alt=""
                            aria-hidden="true"
                            className="absolute right-[8px] top-[8px] h-[clamp(56px,7.03vw,124px)] w-[clamp(56px,7.03vw,124px)] lg:-top-[clamp(14px,2.2vw,42px)] lg:right-[clamp(8px,0.63vw,12px)]"
                        />
                    </div>
                </div>

                {/* ── Panel de ventajas ── */}
                <div className="mt-[clamp(18px,1.1vw,22px)] rounded-[clamp(18px,1.6vw,30px)] border border-white/60 bg-[#e0f2f2]/95 px-[clamp(16px,2vw,40px)] pb-[clamp(18px,1.1vw,21px)] pt-[clamp(22px,2.3vw,44px)] shadow-[0_18px_40px_rgba(12,50,60,0.08)] backdrop-blur-[3px]">
                    <div className="grid grid-cols-2 gap-x-[12px] gap-y-[24px] text-center lg:grid-cols-4 lg:gap-x-0">
                        {VENTAJAS.map((ventaja) => (
                            <div
                                key={ventaja.titulo}
                                className="flex flex-col items-center px-[4px]"
                            >
                                <img
                                    src={asset(ventaja.icono)}
                                    alt=""
                                    aria-hidden="true"
                                    loading="lazy"
                                    className="h-[clamp(56px,5.2vw,5.7rem)] w-[clamp(56px,5.2vw,5.7rem)]"
                                />
                                <h3 className="mt-[clamp(8px,0.94vw,18px)] text-[clamp(1rem,1.48vw,1.63rem)] font-bold leading-[1.15] text-[#041c36] [font-family:'Source_Sans_3','Source_Sans_Pro',sans-serif]">
                                    {ventaja.titulo}
                                </h3>
                                <p className="mt-[clamp(4px,0.4vw,8px)] text-[clamp(0.82rem,1.12vw,1.25rem)] leading-[1.3] text-[#0c1724]">
                                    {ventaja.descripcion}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Llamada a la acción ── */}
                <div className="mt-[clamp(18px,1.05vw,20px)] flex items-center justify-center gap-[clamp(16px,3vw,58px)]">
                    <span
                        className="hidden h-[2px] w-[clamp(70px,9.9vw,190px)] bg-gradient-to-l from-[#0f8b87] to-transparent md:block"
                        aria-hidden="true"
                    />

                    <a
                        href={whatsappLink(
                            "Hola, deseo información sobre el servicio de Motopatrullas DM 250."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-[12px] rounded-full bg-[#0f8b87] px-[clamp(24px,2.85vw,56px)] py-[clamp(10px,0.82vw,16px)] text-[clamp(1rem,1.4vw,1.7rem)] font-bold text-white !text-white shadow-[0_12px_26px_rgba(14,139,135,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b7c79] hover:!text-white hover:shadow-[0_16px_32px_rgba(14,139,135,0.36)]"
                    >
                        Solicitar Servicio
                        <i className="pi pi-arrow-right text-[0.8em]" aria-hidden="true" />
                    </a>

                    <span
                        className="hidden h-[2px] w-[clamp(70px,9.9vw,190px)] bg-gradient-to-r from-[#0f8b87] to-transparent md:block"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </section>
    );
};

export default MotopatrullasDetalle;
