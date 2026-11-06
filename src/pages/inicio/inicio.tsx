import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../../componentes/landing/HeroSection";
import QuienesSomos from "../../componentes/landing/QuienesSomos";
import ServiciosSection from "../../componentes/landing/ServiciosSection";
import Beneficios from "../../componentes/landing/Beneficios";
import Clientes from "../../componentes/landing/Clientes";
import Testimonios from "../../componentes/landing/Testimonios";
import Cumplimiento from "../../componentes/landing/Cumplimiento";
import FormularioContacto from "../../componentes/landing/FormularioContacto";
import SiteFooter from "../../componentes/landing/SiteFooter";

/**
 * Página de INICIO: landing corporativa completa de una sola página.
 * Compone todas las secciones en el orden que maximiza interés y conversión:
 * Hero -> Quiénes somos -> Servicios -> Compromiso -> Relaciones de confianza -> Testimonios -> Legalidad -> Contacto.
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
            <QuienesSomos />
            <ServiciosSection />
            <Beneficios />
            <Clientes />
            <Testimonios />
            <Cumplimiento />
            <FormularioContacto />
            <SiteFooter />
        </main>
    );
};

export default Inicio;
