import React from "react";
import { CUMPLIMIENTO } from "../../data/empresa";

/** Resuelve rutas de /public respetando el BASE_URL (GitHub Pages). */
const asset = (ruta: string) => `${import.meta.env.BASE_URL}${ruta}`;

/**
 * Identidad visual de cada permiso, en el mismo orden que CUMPLIMIENTO.
 * Los tres primeros usan el logo de la institución; el último, un icono
 * acorde a capacitación y adiestramiento.
 */
const INSIGNIAS: Array<{ imagen?: string; icono?: string; clase?: string }> = [
    { imagen: "ref/8/edomex.webp" },
    // La bandera viene con mucho margen alrededor: se escala para que se aprecie.
    { imagen: "ref/8/mex.webp", clase: "scale-[2.2]" },
    { imagen: "ref/8/pcivil.jpg" },
    { icono: "pi pi-graduation-cap" },
];

/**
 * Sección "Legalidad y cumplimiento" (estilo referencia GYPSE):
 * fondo blanco, tarjetas claras con el logo o icono de cada permiso.
 */
const Cumplimiento: React.FC = () => {
    return (
        <section id="cumplimiento" className="relative scroll-mt-20 bg-white px-5 py-24">
            <div className="mx-auto max-w-[1100px]">
                <div className="mb-12 text-center">
                    <span className="mb-4 block text-[0.82rem] font-bold uppercase tracking-[3px] text-brand-400">
                        Legalidad y cumplimiento
                    </span>
                    <h2 className="mb-5 font-heading text-[2rem] font-bold leading-tight text-ink-900 sm:text-[2.4rem]">
                        Permisos y registros
                    </h2>
                    <p className="mx-auto max-w-[640px] text-[1.05rem] leading-[1.8] text-ink-500">
                        Compromiso con el cumplimiento normativo y la operación responsable.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {CUMPLIMIENTO.map((item, indice) => {
                        const insignia = INSIGNIAS[indice] ?? {};
                        return (
                            <article
                                key={item.entidad}
                                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(6,20,12,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-[0_12px_32px_rgba(27,156,133,0.12)]"
                            >
                                <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]">
                                    {insignia.imagen ? (
                                        <img
                                            src={asset(insignia.imagen)}
                                            alt={`Logo ${item.entidad}`}
                                            className={`h-full w-full object-contain ${insignia.clase ?? ""}`}
                                            loading="lazy"
                                        />
                                    ) : (
                                        <i
                                            className={`${insignia.icono} text-[1.6rem] text-brand-500`}
                                            aria-hidden="true"
                                        />
                                    )}
                                </span>
                                <div className="min-w-0">
                                    <h3 className="mb-1 font-heading text-[1rem] font-bold text-ink-900">
                                        {item.entidad}
                                    </h3>
                                    <p className="text-[0.9rem] text-ink-500">{item.registro}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <p className="mt-8 text-center text-[0.8rem] italic text-ink-300">
                    * Los registros mostrados son representativos. Solicite la documentación vigente
                    para verificación.
                </p>
            </div>
        </section>
    );
};

export default Cumplimiento;
