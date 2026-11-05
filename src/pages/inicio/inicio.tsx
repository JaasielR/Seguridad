import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../../componentes/landing/HeroSection";
import ServiciosSection from "../../componentes/landing/ServiciosSection";
import QuienesSomos from "../../componentes/landing/QuienesSomos";
import Cumplimiento from "../../componentes/landing/Cumplimiento";
import BolsaTrabajo from "../../componentes/landing/BolsaTrabajo";
import Clientes from "../../componentes/landing/Clientes";
import Beneficios from "../../componentes/landing/Beneficios";
import Testimonios from "../../componentes/landing/Testimonios";
import FormularioContacto from "../../componentes/landing/FormularioContacto";
import SiteFooter from "../../componentes/landing/SiteFooter";

/**
 * Página de INICIO: landing corporativa completa de una sola página.
 * Compone todas las secciones solicitadas en orden, respetando la
 * identidad de marca (azul marino + oro) del proyecto.
 */
const Inicio: React.FC = () => {
    const location = useLocation();

    // Al llegar desde otra ruta con state.scrollTo, desplaza a la sección pedida.
    useEffect(() => {
        const destino = (location.state as { scrollTo?: string } | null)?.scrollTo;
        if (destino) {
            // pequeño retraso para asegurar que las secciones ya están montadas
            const t = setTimeout(() => {
                document.getElementById(destino)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
            return () => clearTimeout(t);
        }
    }, [location.state]);

    return (
        <main className="relative">
            <HeroSection />
            <ServiciosSection />
            <QuienesSomos />
            <Cumplimiento />
            <BolsaTrabajo />
            <Clientes />
            <Beneficios />
            <Testimonios />
            <FormularioContacto />
            <SiteFooter />
        </main>
    );
};

export default Inicio;
