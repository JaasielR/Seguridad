import React from "react";
import { SECTORES } from "../../data/empresa";

/**
 * Sección "Relaciones de confianza" (estilo referencia GYPSE): fondo blanco,
 * franja de organizaciones/sectores que confían en el servicio.
 *
 * Al no contar con logotipos de clientes reales, se representan los sectores
 * atendidos. Sustituye por logos cuando existan.
 */
const Clientes: React.FC = () => {
    return (
        <section id="clientes" className="relative scroll-mt-20 bg-white px-5 py-24">
            <div className="mx-auto max-w-[1100px] text-center">
                <span className="mb-4 block text-[0.82rem] font-bold uppercase tracking-[3px] text-brand-400">
                    Relaciones de confianza
                </span>
                <h2 className="mb-5 font-heading text-[2rem] font-bold leading-tight text-ink-900 sm:text-[2.4rem]">
                    Organizaciones que protegemos.
                </h2>
                <p className="mx-auto mb-12 max-w-[640px] text-[1.05rem] leading-[1.8] text-ink-500">
                    Agradecemos la confianza de los locatarios y organizaciones que nos permiten
                    acompañar sus operaciones día con día.
                </p>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {SECTORES.map((sector) => (
                        <div
                            key={sector}
                            className="flex items-center justify-center rounded-xl border border-gray-100 bg-brand-50/50 px-4 py-6 text-center text-[0.9rem] font-medium text-ink-700 transition-all duration-300 hover:border-brand-100 hover:bg-brand-50 hover:text-brand-700"
                        >
                            {sector}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clientes;
