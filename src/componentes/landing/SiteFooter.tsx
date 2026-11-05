import React, { useState } from "react";
import { EMPRESA, whatsappLink } from "../../data/empresa";

/**
 * FOOTER del sitio (estilo referencia GYPSE): fondo verde oscuro, texto claro,
 * dirección, teléfono, correo, redes sociales, aviso de privacidad y derechos.
 */
const SiteFooter: React.FC = () => {
    const [avisoAbierto, setAvisoAbierto] = useState(false);
    const anio = new Date().getFullYear();

    const redes = [
        { icono: "pi pi-facebook", url: "#", label: "Facebook" },
        { icono: "pi pi-instagram", url: "#", label: "Instagram" },
        { icono: "pi pi-whatsapp", url: whatsappLink(), label: "WhatsApp" },
    ];

    return (
        <footer className="relative bg-brand-900 pt-16 text-white">
            <div className="mx-auto grid max-w-[1240px] gap-10 px-5 pb-10 sm:grid-cols-2 lg:grid-cols-4">
                {/* Marca */}
                <div className="lg:col-span-2">
                    <div className="mb-4 flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-400 text-white">
                            <i className="pi pi-shield text-lg" aria-hidden="true" />
                        </span>
                        <h3 className="font-heading text-[1.05rem] font-extrabold uppercase tracking-[0.5px] text-white">
                            Seguridad Interna CDA
                        </h3>
                    </div>
                    <p className="max-w-[420px] text-[0.92rem] leading-[1.8] text-brand-50/70">
                        Seguridad privada profesional con cobertura 24/7, tecnología avanzada y
                        personal certificado para proteger lo que más importa.
                    </p>
                </div>

                {/* Contacto */}
                <div>
                    <h4 className="mb-4 font-heading text-[0.85rem] font-bold uppercase tracking-[2px] text-brand-400">
                        Contacto
                    </h4>
                    <ul className="flex flex-col gap-3 text-[0.9rem] text-brand-50/70">
                        <li className="flex items-start gap-3">
                            <i className="pi pi-map-marker mt-0.5 text-brand-400" aria-hidden="true" />
                            <span>Central de Abastos, Ecatepec de Morelos, Estado de México</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="pi pi-phone text-brand-400" aria-hidden="true" />
                            <a href={`tel:+${EMPRESA.telefonoInternacional}`} className="text-brand-50/70 hover:text-white">
                                {EMPRESA.telefono}
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="pi pi-envelope text-brand-400" aria-hidden="true" />
                            <a href={`mailto:${EMPRESA.email}`} className="text-brand-50/70 hover:text-white">
                                {EMPRESA.email}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Redes y aviso */}
                <div>
                    <h4 className="mb-4 font-heading text-[0.85rem] font-bold uppercase tracking-[2px] text-brand-400">
                        Síguenos
                    </h4>
                    <div className="mb-5 flex gap-3">
                        {redes.map((red) => (
                            <a
                                key={red.label}
                                href={red.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={red.label}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-brand-50/80 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:bg-brand-400 hover:text-white"
                            >
                                <i className={red.icono} aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                    <button
                        onClick={() => setAvisoAbierto(true)}
                        className="text-[0.88rem] text-brand-50/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                        Aviso de privacidad
                    </button>
                </div>
            </div>

            {/* Barra de derechos reservados */}
            <div className="border-t border-white/10 py-5 text-center text-[0.82rem] text-brand-50/50">
                © {anio} {EMPRESA.nombre}. Todos los derechos reservados.
            </div>

            {/* Modal de aviso de privacidad */}
            {avisoAbierto && (
                <div
                    className="fixed inset-0 z-[2000] flex items-center justify-center bg-brand-900/70 p-5 backdrop-blur-lg"
                    onClick={() => setAvisoAbierto(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Aviso de privacidad"
                >
                    <div
                        className="flex max-h-[85vh] w-full max-w-[640px] animate-modalFadeIn flex-col overflow-y-auto rounded-2xl bg-white p-8 shadow-[0_20px_60px_rgba(6,20,12,0.3)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="font-heading text-[1.4rem] font-bold text-ink-900">
                                Aviso de Privacidad
                            </h3>
                            <button
                                onClick={() => setAvisoAbierto(false)}
                                aria-label="Cerrar"
                                className="text-3xl leading-none text-ink-500 transition-colors hover:text-brand-700"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="space-y-4 text-[0.92rem] leading-[1.8] text-ink-500">
                            <p>
                                {EMPRESA.nombre}, con domicilio en la Central de Abastos de Ecatepec,
                                Estado de México, es responsable del tratamiento y protección de los
                                datos personales que usted proporcione a través de este sitio.
                            </p>
                            <p>
                                Los datos recabados (nombre, empresa, teléfono, correo electrónico y
                                mensaje) se utilizarán única y exclusivamente para atender su
                                solicitud de información y contactarle respecto a nuestros servicios
                                de seguridad privada. No serán compartidos con terceros sin su
                                consentimiento.
                            </p>
                            <p>
                                Usted puede ejercer sus derechos de acceso, rectificación,
                                cancelación u oposición (ARCO) comunicándose al teléfono{" "}
                                <strong className="text-brand-700">{EMPRESA.telefono}</strong> con el{" "}
                                {EMPRESA.cargo}, {EMPRESA.director}.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default SiteFooter;
