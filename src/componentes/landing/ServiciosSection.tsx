import React, { useState } from "react";
import { SERVICIOS } from "../../data/empresa";
import ServicioModal from "../ServicioModal";

/**
 * Sección "Soluciones especializadas" (estilo referencia GYPSE):
 * fondo blanco, eyebrow verde, título Montserrat, grid de tarjetas claras
 * con icono en círculo verde y enlace "Conocer servicio".
 */
const ServiciosSection: React.FC = () => {
    const [servicioAbierto, setServicioAbierto] = useState<number | null>(null);

    const servicioSeleccionado =
        SERVICIOS.find((s) => s.id === servicioAbierto) ?? {
            id: 0,
            titulo: "",
            descripcion: "",
            imagen: "",
        };

    return (
        <section id="servicios" className="relative scroll-mt-20 bg-white px-5 py-24">
            <div className="mx-auto max-w-[1240px]">
                <div className="mb-14 max-w-[720px]">
                    <span className="mb-4 block text-[0.82rem] font-bold uppercase tracking-[3px] text-brand-400">
                        Soluciones especializadas
                    </span>
                    <h2 className="mb-5 font-heading text-[2rem] font-bold leading-tight text-ink-900 sm:text-[2.6rem]">
                        Seguridad que se adapta a tu operación.
                    </h2>
                    <p className="text-[1.05rem] leading-[1.8] text-ink-500">
                        Diseñamos esquemas de protección de acuerdo con los riesgos, las
                        instalaciones y las necesidades de cada locatario y operación de la Central.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICIOS.map((servicio) => (
                        <button
                            key={servicio.id}
                            type="button"
                            onClick={() => setServicioAbierto(servicio.id)}
                            aria-label={`Conocer servicio: ${servicio.titulo}`}
                            className="group flex h-full flex-col items-start rounded-2xl border border-gray-100 bg-white p-8 text-left shadow-[0_4px_20px_rgba(6,20,12,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-100 hover:shadow-[0_14px_40px_rgba(27,156,133,0.15)] focus:outline-none focus:ring-2 focus:ring-brand-400/40"
                        >
                            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-2xl text-brand-500 transition-all duration-300 group-hover:bg-brand-400 group-hover:text-white">
                                <i className={servicio.icono} aria-hidden="true" />
                            </span>

                            <h3 className="mb-3 font-heading text-[1.2rem] font-bold leading-snug text-ink-900">
                                {servicio.titulo}
                            </h3>

                            <p className="mb-6 flex-1 text-[0.95rem] leading-[1.7] text-ink-500">
                                {servicio.resumen}
                            </p>

                            <span className="inline-flex items-center gap-2 text-[0.88rem] font-semibold text-brand-700 transition-colors group-hover:text-brand-600">
                                Conocer servicio
                                <i
                                    className="pi pi-arrow-right text-[0.8rem] transition-transform duration-300 group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <ServicioModal
                servicio={{
                    id: servicioSeleccionado.id,
                    titulo: servicioSeleccionado.titulo,
                    descripcion:
                        "resumen" in servicioSeleccionado
                            ? servicioSeleccionado.resumen
                            : servicioSeleccionado.descripcion,
                    imagen: servicioSeleccionado.imagen,
                }}
                esAbierto={servicioAbierto !== null}
                onCerrar={() => setServicioAbierto(null)}
            />
        </section>
    );
};

export default ServiciosSection;
