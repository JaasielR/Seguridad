/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL?: string;
    readonly VITE_CLIENT_ID?: string;
    /** EmailJS Service ID (Email Services del dashboard). */
    readonly VITE_EMAILJS_SERVICE_ID?: string;
    /** EmailJS Template ID (Email Templates del dashboard). */
    readonly VITE_EMAILJS_TEMPLATE_ID?: string;
    /** EmailJS Public Key (Account > General > API Keys). */
    readonly VITE_EMAILJS_PUBLIC_KEY?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
