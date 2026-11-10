import React from "react";

/**
 * Logo / título de marca en estilo claro (referencia GYPSE):
 * marca verde sobre fondo blanco, tipografía Montserrat.
 *
 * El isotipo de /public/logo.png se coloca sobre el cubo verde de la marca.
 */
export const Title: React.FC = () => {
    return (
        <span className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700 shadow-sm">
                <img
                    src={`${import.meta.env.BASE_URL}logo.png`}
                    alt=""
                    aria-hidden="true"
                    className="h-9 w-9 object-contain"
                />
            </span>
            <span className="flex flex-col leading-none">
                <span className="font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-ink-500">
                    Grupo
                </span>
                <span className="mt-0.5 font-heading text-[1.35rem] font-extrabold uppercase leading-none tracking-[0.5px] text-brand-700">
                    SICAE
                </span>
            </span>
        </span>
    );
};

export default Title;
