import React, { useEffect } from "react";
import ServiciosSection from "../../componentes/landing/ServiciosSection";
import Beneficios from "../../componentes/landing/Beneficios";
import SiteFooter from "../../componentes/landing/SiteFooter";
import { desplazarASeccion, irAlInicio } from "../../componentes/irASeccion";

interface ServiciosProps {
    /** Sección a la que se debe bajar al entrar desde un alias de URL. */
    seccion?: string;
}

/**
 * Página /servicios: Servicios y Por qué elegirnos.
 *
 * La ruta /porque_elegirnos reutiliza esta página y baja a la sección.
 */
const Servicios: React.FC<ServiciosProps> = ({ seccion }) => {
    useEffect(() => {
        if (!seccion) {
            irAlInicio();
            return;
        }

        desplazarASeccion(seccion);
    }, [seccion]);

    return (
        <main className="bg-[#eef6f8]">
            {/* Espacio para el header fijo en pantallas pequeñas. */}
            <div className="h-[73px] sm:hidden" aria-hidden="true" />
            <ServiciosSection />
            <Beneficios />
            <SiteFooter />
        </main>
    );
};

export default Servicios;
