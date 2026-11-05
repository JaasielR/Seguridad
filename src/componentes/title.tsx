import React from "react";

/**
 * Logo / título de marca en estilo claro (referencia GYPSE):
 * marca verde sobre fondo blanco, tipografía Montserrat.
 */
export const Title: React.FC = () => {
    return (
        <span className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-white shadow-sm">
                <i className="pi pi-shield text-lg" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
                <span className="font-heading text-[0.95rem] font-extrabold uppercase tracking-[0.5px] text-brand-700">
                    Seguridad Interna
                </span>
                <span className="font-heading text-[0.62rem] font-semibold uppercase tracking-[2px] text-ink-500">
                    Central de Abastos Ecatepec
                </span>
            </span>
        </span>
    );
};

export default Title;
