import React, { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Página de detalle — Recorridos Nocturnos Perimetrales.
 *
 * Réplica de la referencia /public/ref/3:
 *   - Fondo nocturno con luna y estrellas (`fondo_fullhd_1920x1080.png`).
 *   - Insignia circular con luna, eyebrow menta y titular blanco.
 *   - Columna izquierda: fotografía de recorrido nocturno y línea de garantías.
 *   - Columna derecha: línea de tiempo horaria, ventajas y llamada a la acción.
 *
 * Los iconos de /public/ref/3/proc son los cutouts originales recortados a su
 * círculo y recoloreados a los tonos exactos de la referencia.
 *
 * Nota: Bootstrap se importa globalmente y sus utilidades de espaciado llevan
 * !important, por eso se usan valores arbitrarios de Tailwind.
 */

const asset = (ruta: string): string => `${import.meta.env.BASE_URL}${ruta}`;

const PASOS = [
    {
        hora: "01:00",
        icono: "ref/3/proc/reloj.png",
        lineas: ["Cada hora – Bitácora", "de novedades con", "fotografías"],
    },
    {
        hora: "02:00",
        icono: "ref/3/proc/reloj.png",
        lineas: ["Vigilancia de bardas y", "accesos"],
    },
    {
        hora: "03:00",
        icono: "ref/3/proc/reloj.png",
        lineas: ["Detección de personas", "sospechosas"],
    },
    {
        hora: "04:00",
        icono: "ref/3/proc/reloj.png",
        lineas: ["Recorridos constantes", "del perímetro"],
    },
];

const VENTAJAS = [
    {
        icono: "ref/3/proc/camara.png",
        titulo: "Registro Fotográfico",
        descripcion: "Evidencia con hora y geolocalización",
    },
    {
        icono: "ref/3/proc/audifonos.png",
        titulo: "Comunicación 24/7",
        descripcion: "Coordinación directa con central",
    },
    {
        icono: "ref/3/proc/rayo.png",
        titulo: "Respuesta Inmediata",
        descripcion: "Protocolo activo ante incidencias",
    },
    {
        icono: "ref/3/proc/celular.png",
        titulo: "Reporte en App",
        descripcion: "Consulta bitácoras en tiempo real",
    },
];

/** Escudo fino de la línea de garantías (glifo oscuro sobre círculo menta). */
const EscudoIcono: React.FC = () => (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
        <circle cx="24" cy="24" r="24" fill="#8afed2" />
        <path
            d="M24 10.6 36.6 14.6v11.6c0 6.1-5.3 10.5-12.6 13.3-7.3-2.8-12.6-7.2-12.6-13.3V14.6Z"
            stroke="#08222e"
            strokeWidth="2.6"
            strokeLinejoin="round"
        />
    </svg>
);

const RecorridosNocturnosDetalle: React.FC = () => {
    // Al entrar desde otra página, iniciar en la parte superior.
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    return (
        <section className="relative isolate w-full overflow-hidden bg-[#050d21] text-white [font-family:'Montserrat',sans-serif]">
            {/* Fondo nocturno */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-[position:center_top] bg-no-repeat"
                style={{ backgroundImage: `url(${asset("ref/3/fondo_fullhd_1920x1080.png")})` }}
                aria-hidden="true"
            />

            {/* Destellos tenues del borde inferior izquierdo */}
            <div
                className="pointer-events-none absolute -bottom-[2%] left-0 -z-[5] h-[14vw] w-[48%] -rotate-[6deg] bg-[linear-gradient(90deg,rgba(32,150,158,0.28),rgba(32,150,158,0))] blur-[2px]"
                aria-hidden="true"
            />

            {/* Triángulo menta de la esquina inferior derecha */}
            <div
                className="pointer-events-none absolute bottom-0 right-0 -z-[5] h-[clamp(58px,4.95vw,95px)] w-[clamp(62px,5.2vw,100px)] bg-[#47f0c7]"
                style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                aria-hidden="true"
            />

            <div className="relative mx-auto w-full max-w-[1920px] px-[4.4%] pb-[clamp(28px,2.82vw,54px)] pt-[112px] sm:pt-[124px] lg:pt-[148px]">
                {/* ── Encabezado ── */}
                <div className="flex items-center gap-[clamp(10px,0.95vw,18px)] lg:-ml-[clamp(20px,2.9vw,56px)]">
                    <img
                        src={asset("ref/3/proc/luna.png")}
                        alt=""
                        aria-hidden="true"
                        className="h-[clamp(56px,4.06vw,78px)] w-[clamp(56px,4.06vw,78px)] shrink-0"
                    />
                    <p className="m-0 text-[clamp(0.68rem,1.04vw,1.25rem)] font-bold uppercase leading-none tracking-[0.02em] text-[#a3f2dd]">
                        Soluciones Especializadas
                    </p>
                </div>

                <h1 className="mt-[clamp(13px,0.78vw,15px)] text-[clamp(1.9rem,3.05vw,3.66rem)] font-bold leading-[1.02] tracking-[-0.02em] text-white">
                    Recorridos Nocturnos Perimetrales
                </h1>

                <p className="mt-[clamp(8px,1.04vw,20px)] text-[clamp(1.02rem,1.9vw,2.28rem)] font-semibold leading-[1.12] text-[#9af3df]">
                    Vigilancia constante cuando más importa
                </p>

                <div className="mt-[clamp(26px,1.52vw,29px)] grid items-start gap-[clamp(30px,2.6vw,50px)] lg:grid-cols-[36.2%_60.4%] lg:gap-[3.4%]">
                    {/* ── Columna izquierda ── */}
                    <div>
                        <div className="overflow-hidden rounded-[clamp(14px,1.15vw,22px)] shadow-[0_26px_60px_rgba(0,0,0,0.42)] ring-1 ring-white/10">
                            <img
                                src={asset("b.jpg")}
                                alt="Guardias de seguridad realizando un recorrido nocturno perimetral"
                                className="aspect-[1.063/1] w-full object-cover object-[50%_42%]"
                            />
                        </div>

                        <div className="mt-[clamp(16px,2.97vw,57px)] flex items-center gap-[clamp(8px,0.63vw,12px)]">
                            <span className="h-[clamp(30px,1.95vw,38px)] w-[clamp(30px,1.95vw,38px)] shrink-0">
                                <EscudoIcono />
                            </span>
                            <p className="m-0 text-[clamp(0.66rem,0.84vw,1rem)] font-medium leading-[1.25] text-[#f4f8fa]">
                                Guardias certificados · Patrullas programadas · Evidencia fotográfica
                            </p>
                        </div>
                    </div>

                    {/* ── Columna derecha ── */}
                    <div className="min-w-0 lg:pt-[clamp(0px,0.94vw,18px)]">
                        <h2 className="m-0 text-[clamp(1.12rem,1.56vw,1.88rem)] font-bold leading-[1.15] text-white lg:pl-[4.25%]">
                            Horario y Actividades - Línea de Tiempo Nocturna
                        </h2>

                        {/* Línea de tiempo */}
                        <div className="relative mt-[clamp(20px,2.03vw,39px)]">
                            {/* Conector horizontal con nodos */}
                            <div
                                className="pointer-events-none absolute inset-x-0 top-[clamp(31px,2.4vw,46px)] hidden h-[3px] -translate-y-1/2 bg-[#6fcedb]/80 lg:block"
                                aria-hidden="true"
                            >
                                {[0.5, 25, 50, 75, 99.5].map((pos) => (
                                    <span
                                        key={pos}
                                        className="absolute top-1/2 h-[clamp(9px,0.72vw,14px)] w-[clamp(9px,0.72vw,14px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38dcdc]"
                                        style={{ left: `${pos}%` }}
                                    />
                                ))}
                            </div>

                            <div className="relative grid grid-cols-2 gap-x-[18px] gap-y-[30px] sm:grid-cols-4 sm:gap-x-[8px]">
                                {PASOS.map((paso) => (
                                    <div
                                        key={paso.hora}
                                        className="relative flex flex-col items-center text-center"
                                    >
                                        <img
                                            src={asset(paso.icono)}
                                            alt=""
                                            aria-hidden="true"
                                            className="relative z-10 h-[clamp(58px,4.79vw,92px)] w-[clamp(58px,4.79vw,92px)]"
                                        />
                                        <p className="m-0 mt-[clamp(9px,1.2vw,23px)] text-[clamp(1.02rem,1.63vw,1.96rem)] font-bold leading-none tracking-[0.01em] text-[#a5f8e3]">
                                            {paso.hora}
                                        </p>
                                        <p className="m-0 mt-[clamp(4px,0.52vw,10px)] max-w-[clamp(130px,14.27vw,274px)] text-[clamp(0.7rem,1vw,1.2rem)] font-medium leading-[1.3] text-white">
                                            {paso.lineas.map((linea) => (
                                                <span key={linea} className="block">
                                                    {linea}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Separador */}
                        <div
                            className="mt-[clamp(20px,1.72vw,33px)] h-[2px] w-full bg-[rgba(150,168,205,0.38)]"
                            aria-hidden="true"
                        />

                        {/* Ventajas */}
                        <div className="mt-[clamp(20px,1.98vw,38px)] grid grid-cols-2 gap-[clamp(10px,1.2vw,23px)] lg:grid-cols-4">
                            {VENTAJAS.map((ventaja) => (
                                <div
                                    key={ventaja.titulo}
                                    className="flex flex-col items-center rounded-[clamp(12px,0.94vw,18px)] border-[1.5px] border-[rgba(155,212,222,0.45)] bg-[#131b32] px-[clamp(8px,0.9vw,17px)] pb-[clamp(15px,1.2vw,23px)] pt-[clamp(13px,1.09vw,21px)] text-center"
                                >
                                    <img
                                        src={asset(ventaja.icono)}
                                        alt=""
                                        aria-hidden="true"
                                        loading="lazy"
                                        className="h-[clamp(50px,3.65vw,70px)] w-[clamp(50px,3.65vw,70px)]"
                                    />
                                    <h3 className="mt-[clamp(10px,0.89vw,17px)] text-[clamp(0.86rem,1.25vw,1.5rem)] font-bold leading-[1.22] text-[#f7fafb]">
                                        {ventaja.titulo}
                                    </h3>
                                    <p className="mt-[clamp(8px,0.94vw,18px)] text-[clamp(0.72rem,0.885vw,1.06rem)] font-medium leading-[1.32] text-[#e6f0f6]">
                                        {ventaja.descripcion}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Llamada a la acción */}
                        <div className="mt-[clamp(24px,2.71vw,52px)] flex justify-center">
                            <Link to="/contacto"
                                className="inline-flex items-center gap-[clamp(8px,0.8vw,15px)] rounded-[clamp(10px,0.73vw,14px)] bg-[#25c8ca] px-[clamp(26px,2.95vw,56px)] py-[clamp(10px,0.78vw,15px)] text-[clamp(0.98rem,1.46vw,1.75rem)] font-bold leading-[1.1] text-white !text-white shadow-[0_14px_30px_rgba(37,200,202,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fb4b6] hover:!text-white hover:shadow-[0_18px_36px_rgba(37,200,202,0.38)]"
                            >
                                Solicitar Servicio
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.4"
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
            </div>
        </section>
    );
};

export default RecorridosNocturnosDetalle;
