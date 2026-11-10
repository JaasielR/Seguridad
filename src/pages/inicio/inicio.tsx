import React, { useEffect } from "react";
import HeroSection from "../../componentes/landing/HeroSection";
import QuienesSomos from "../../componentes/landing/QuienesSomos";
import Clientes from "../../componentes/landing/Clientes";
import Testimonios from "../../componentes/landing/Testimonios";
import Cumplimiento from "../../componentes/landing/Cumplimiento";
import SiteFooter from "../../componentes/landing/SiteFooter";
import { desplazarASeccion, irAlInicio } from "../../componentes/irASeccion";

interface InicioProps {
    /** Sección a la que se debe bajar al entrar desde un alias de URL. */
    seccion?: string;
}

/**
 * Página /home: Portada, Quiénes somos, Organizaciones que protegemos,
 * Testimonios y Permisos y registros.
 *
 * Las rutas /quienes_somos, /organizaciones, /testimonios y /permisos
 * reutilizan esta página y bajan a la sección correspondiente.
 */
const Inicio: React.FC<InicioProps> = ({ seccion }) => {
    useEffect(() => {
        if (!seccion) {
            irAlInicio();
            return;
        }

        desplazarASeccion(seccion);
    }, [seccion]);

    return (
        <main className="relative">
            <HeroSection />
            <QuienesSomos />
            <Clientes />
            <Testimonios />
            <Cumplimiento />
            <SiteFooter />
        </main>
    );
};

export default Inicio;
