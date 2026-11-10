import React, { useLayoutEffect } from "react";
import FormularioContacto from "../../componentes/landing/FormularioContacto";
import SiteFooter from "../../componentes/landing/SiteFooter";

/**
 * Página /contacto: formulario de solicitud y datos de contacto.
 * El botón "Solicitar Cotización" del header y la opción Contacto del menú
 * llevan aquí.
 */
const ContactoPage: React.FC = () => {
    // Al cargar la ruta, la página siempre empieza arriba (sin animación).
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <main className="bg-brand-50">
            <FormularioContacto />
            <SiteFooter />
        </main>
    );
};

export default ContactoPage;
