import React from "react";
import { whatsappLink } from "../data/empresa";

/**
 * Botón flotante de WhatsApp.
 * - Visible en todas las pantallas (fixed, esquina inferior derecha).
 * - Abre la conversación con el mensaje automático precargado.
 * - Accesible: usa aria-label y foco visible.
 */
const WhatsAppButton: React.FC = () => {
    return (
        <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            title="Contactar por WhatsApp"
            className="group fixed bottom-24 right-5 z-[1500] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_6px_20px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_28px_rgba(37,211,102,0.65)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 md:bottom-28 md:h-16 md:w-16"
        >
            {/* Pulso animado para llamar la atención */}
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
            {/* Icono de WhatsApp (SVG inline, sin dependencias externas) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="relative h-7 w-7 text-white md:h-8 md:w-8"
                aria-hidden="true"
            >
                <path d="M12.04 2.003a9.93 9.93 0 0 0-8.49 15.08L2 22l5.05-1.32a9.93 9.93 0 1 0 4.99-18.68zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.12.07-1.81-.11-.42-.11-.95-.32-1.65-.62-2.9-1.25-4.79-4.17-4.94-4.37-.14-.2-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.26-.29.57-.36.76-.36l.55.01c.18.01.42-.07.65.5.24.58.82 2.01.89 2.16.07.14.12.31.02.5-.09.2-.14.31-.28.48-.14.17-.3.37-.42.5-.14.14-.29.29-.12.57.16.29.73 1.2 1.56 1.94 1.07.95 1.97 1.25 2.26 1.39.29.14.46.12.63-.07.17-.2.72-.84.91-1.13.19-.29.39-.24.65-.14.26.09 1.67.79 1.96.93.29.14.48.22.55.34.07.12.07.69-.17 1.37z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
