import emailjs from "@emailjs/browser";
import { EMPRESA } from "../data/empresa";

/**
 * Servicio de envío de correos con EmailJS.
 *
 * EmailJS permite enviar correos directamente desde el navegador (sin backend)
 * conectando una cuenta de correo mediante un servicio y una plantilla.
 *
 * Configuración (variables de entorno en .env):
 *   VITE_EMAILJS_SERVICE_ID   -> ID del servicio de correo
 *   VITE_EMAILJS_TEMPLATE_ID  -> ID de la plantilla
 *   VITE_EMAILJS_PUBLIC_KEY   -> clave pública de la cuenta
 *
 * La Public Key de EmailJS está pensada para usarse en el cliente, por lo que
 * es seguro exponerla en el bundle del frontend.
 */

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

/** Indica si EmailJS tiene toda su configuración disponible. */
export const emailConfigurado = (): boolean =>
    Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

/** Datos de la solicitud de contacto que se envían a la plantilla. */
export interface SolicitudContacto {
    nombre: string;
    empresa: string;
    telefono: string;
    email: string;
    servicio: string;
    mensaje: string;
}

/**
 * Envía la solicitud de contacto por correo mediante EmailJS.
 * Lanza un error si falta configuración o si el envío falla, para que el
 * componente pueda mostrar el mensaje adecuado o el fallback de WhatsApp.
 */
export async function enviarSolicitudContacto(datos: SolicitudContacto): Promise<void> {
    if (!emailConfigurado()) {
        throw new Error("EmailJS no está configurado. Revise las variables VITE_EMAILJS_*.");
    }

    // Las claves del objeto deben coincidir con las variables de la plantilla
    // de EmailJS (p. ej. {{nombre}}, {{email}}, {{mensaje}}...).
    const templateParams: Record<string, string> = {
        nombre: datos.nombre,
        empresa: datos.empresa || "No especificada",
        telefono: datos.telefono,
        email: datos.email,
        servicio: datos.servicio,
        mensaje: datos.mensaje,
        // Metadatos útiles para la plantilla / destinatario
        to_email: EMPRESA.email,
        reply_to: datos.email,
        asunto: `Nueva solicitud de información: ${datos.servicio}`,
        fecha: new Date().toLocaleString("es-MX"),
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
    });
}
