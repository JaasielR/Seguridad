import React, { useState } from "react";
import { EMPRESA, SERVICIOS, whatsappLink } from "../../data/empresa";
import { enviarSolicitudContacto, emailConfigurado } from "../../services/emailService";

/** Estructura de los datos del formulario. */
interface FormState {
    nombre: string;
    empresa: string;
    telefono: string;
    email: string;
    servicio: string;
    mensaje: string;
}

/** Errores de validación por campo. */
type FormErrors = Partial<Record<keyof FormState, string>>;

const ESTADO_INICIAL: FormState = {
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: "",
};

/**
 * Sección FORMULARIO DE CONTACTO ("Solicita información").
 * - Validación de campos requeridos (nombre, teléfono, email, servicio, mensaje).
 * - Envío por método POST a un endpoint configurable.
 * - Mensaje de éxito tras el envío. Si el endpoint no existe, cae de forma
 *   elegante a un enlace de WhatsApp con el resumen de la solicitud.
 */
const FormularioContacto: React.FC = () => {
    const [form, setForm] = useState<FormState>(ESTADO_INICIAL);
    const [errores, setErrores] = useState<FormErrors>({});
    const [enviando, setEnviando] = useState(false);
    const [exito, setExito] = useState(false);
    const [errorEnvio, setErrorEnvio] = useState<string | null>(null);

    /** Validación de reglas de negocio de cada campo. */
    const validar = (datos: FormState): FormErrors => {
        const e: FormErrors = {};
        if (!datos.nombre.trim()) e.nombre = "El nombre completo es obligatorio.";
        if (!datos.telefono.trim()) {
            e.telefono = "El teléfono es obligatorio.";
        } else if (!/^[\d\s()+-]{7,}$/.test(datos.telefono.trim())) {
            e.telefono = "Ingrese un teléfono válido.";
        }
        if (!datos.email.trim()) {
            e.email = "El correo electrónico es obligatorio.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email.trim())) {
            e.email = "Ingrese un correo electrónico válido.";
        }
        if (!datos.servicio) e.servicio = "Seleccione un servicio.";
        if (!datos.mensaje.trim()) e.mensaje = "Escriba un mensaje.";
        return e;
    };

    const actualizar =
        (campo: keyof FormState) =>
        (
            ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
        ) => {
            setForm((prev) => ({ ...prev, [campo]: ev.target.value }));
            // Limpia el error del campo mientras el usuario corrige
            setErrores((prev) => ({ ...prev, [campo]: undefined }));
        };

    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setErrorEnvio(null);

        const erroresValidacion = validar(form);
        if (Object.keys(erroresValidacion).length > 0) {
            setErrores(erroresValidacion);
            return;
        }

        setEnviando(true);
        try {
            // Envío del correo mediante EmailJS (sin backend).
            await enviarSolicitudContacto(form);

            setExito(true);
            setForm(ESTADO_INICIAL);
        } catch {
            // Fallback: si EmailJS no está configurado o falla el envío,
            // ofrecemos continuar por WhatsApp sin perder el mensaje.
            setErrorEnvio(
                emailConfigurado()
                    ? "No pudimos enviar la solicitud en este momento. Puede contactarnos directamente por WhatsApp o teléfono."
                    : "El envío de correo aún no está configurado. Puede contactarnos directamente por WhatsApp o teléfono."
            );
        } finally {
            setEnviando(false);
        }
    };

    // Resumen para el fallback de WhatsApp
    const resumenWhatsApp = whatsappLink(
        `Hola, soy ${form.nombre || "(nombre)"}${
            form.empresa ? ` de ${form.empresa}` : ""
        }. Me interesa el servicio de ${form.servicio || "seguridad"}. ${form.mensaje}`.trim()
    );

    return (
        <section id="contacto" className="relative scroll-mt-20 bg-brand-50 px-5 py-24">
            <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_1.3fr]">
                {/* Columna de datos de contacto */}
                <div className="flex flex-col justify-center">
                    <span className="mb-4 block text-[0.82rem] font-bold uppercase tracking-[3px] text-brand-400">
                        Hablemos de tu operación
                    </span>
                    <h2 className="mb-5 font-heading text-[2rem] font-bold leading-tight text-ink-900 sm:text-[2.5rem]">
                        Encuentra el esquema de seguridad adecuado.
                    </h2>
                    <p className="mb-8 text-[1.05rem] leading-[1.8] text-ink-500">
                        Cuéntanos qué necesitas proteger. Te ayudamos a identificar las necesidades
                        de tu operación y a definir una propuesta, con un diagnóstico sin costo ni
                        compromiso.
                    </p>

                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4 rounded-xl border border-brand-100 bg-white p-4">
                            <i className="pi pi-user text-xl text-brand-500" aria-hidden="true" />
                            <div>
                                <span className="block text-[0.82rem] uppercase tracking-wide text-ink-500">
                                    {EMPRESA.cargo}
                                </span>
                                <strong className="text-ink-900">{EMPRESA.director}</strong>
                            </div>
                        </li>
                        <li className="flex items-center gap-4 rounded-xl border border-brand-100 bg-white p-4">
                            <i className="pi pi-phone text-xl text-brand-500" aria-hidden="true" />
                            <div>
                                <span className="block text-[0.82rem] uppercase tracking-wide text-ink-500">
                                    Teléfono
                                </span>
                                <a href={`tel:+${EMPRESA.telefonoInternacional}`} className="font-bold text-brand-700">
                                    {EMPRESA.telefono}
                                </a>
                            </div>
                        </li>
                        <li className="flex items-center gap-4 rounded-xl border border-brand-100 bg-white p-4">
                            <i className="pi pi-clock text-xl text-brand-500" aria-hidden="true" />
                            <div>
                                <span className="block text-[0.82rem] uppercase tracking-wide text-ink-500">
                                    Horario
                                </span>
                                <strong className="text-ink-900">{EMPRESA.horario}</strong>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Columna del formulario */}
                <div className="gold-panel p-7 sm:p-9">
                    {exito ? (
                        <div
                            role="status"
                            className="flex h-full min-h-[380px] flex-col items-center justify-center text-center"
                        >
                            <span className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-brand-400 text-4xl text-white">
                                <i className="pi pi-check" aria-hidden="true" />
                            </span>
                            <h3 className="mb-3 font-heading text-[1.5rem] font-bold text-ink-900">
                                ¡Solicitud enviada!
                            </h3>
                            <p className="mb-7 max-w-[420px] text-ink-500">
                                Gracias por contactarnos. Nuestro equipo revisará su solicitud y le
                                responderá a la brevedad.
                            </p>
                            <button
                                onClick={() => setExito(false)}
                                className="rounded-full bg-brand-400 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-600"
                            >
                                Enviar otra solicitud
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                            <Campo
                                id="nombre"
                                label="Nombre completo"
                                requerido
                                error={errores.nombre}
                            >
                                <input
                                    id="nombre"
                                    type="text"
                                    value={form.nombre}
                                    onChange={actualizar("nombre")}
                                    placeholder="Ingrese su nombre completo"
                                    className="field-input"
                                    aria-required="true"
                                    aria-invalid={!!errores.nombre}
                                    autoComplete="name"
                                />
                            </Campo>

                            <Campo id="empresa" label="Empresa">
                                <input
                                    id="empresa"
                                    type="text"
                                    value={form.empresa}
                                    onChange={actualizar("empresa")}
                                    placeholder="Nombre de su empresa o negocio"
                                    className="field-input"
                                    autoComplete="organization"
                                />
                            </Campo>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <Campo
                                    id="telefono"
                                    label="Teléfono"
                                    requerido
                                    error={errores.telefono}
                                >
                                    <input
                                        id="telefono"
                                        type="tel"
                                        value={form.telefono}
                                        onChange={actualizar("telefono")}
                                        placeholder="55 1234 5678"
                                        className="field-input"
                                        aria-required="true"
                                        aria-invalid={!!errores.telefono}
                                        autoComplete="tel"
                                    />
                                </Campo>

                                <Campo
                                    id="email"
                                    label="Correo electrónico"
                                    requerido
                                    error={errores.email}
                                >
                                    <input
                                        id="email"
                                        type="email"
                                        value={form.email}
                                        onChange={actualizar("email")}
                                        placeholder="su@correo.com"
                                        className="field-input"
                                        aria-required="true"
                                        aria-invalid={!!errores.email}
                                        autoComplete="email"
                                    />
                                </Campo>
                            </div>

                            <Campo
                                id="servicio"
                                label="Servicio requerido"
                                requerido
                                error={errores.servicio}
                            >
                                <select
                                    id="servicio"
                                    value={form.servicio}
                                    onChange={actualizar("servicio")}
                                    className="field-input"
                                    aria-required="true"
                                    aria-invalid={!!errores.servicio}
                                >
                                    <option value="">Seleccione un servicio</option>
                                    {SERVICIOS.map((s) => (
                                        <option key={s.id} value={s.titulo}>
                                            {s.titulo}
                                        </option>
                                    ))}
                                    <option value="Otro">Otro / Consulta general</option>
                                </select>
                            </Campo>

                            <Campo id="mensaje" label="Mensaje" requerido error={errores.mensaje}>
                                <textarea
                                    id="mensaje"
                                    rows={4}
                                    value={form.mensaje}
                                    onChange={actualizar("mensaje")}
                                    placeholder="Describa su necesidad de seguridad..."
                                    className="field-input min-h-[110px] resize-y"
                                    aria-required="true"
                                    aria-invalid={!!errores.mensaje}
                                />
                            </Campo>

                            {errorEnvio && (
                                <div
                                    role="alert"
                                    className="flex flex-col gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-[0.9rem] text-red-700"
                                >
                                    <span>{errorEnvio}</span>
                                    <a
                                        href={resumenWhatsApp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 font-bold text-[#128C7E]"
                                    >
                                        <i className="pi pi-whatsapp" aria-hidden="true" />
                                        Continuar por WhatsApp
                                    </a>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={enviando}
                                className="mt-1 flex items-center justify-center gap-2 rounded-full bg-brand-400 px-10 py-4 text-[1rem] font-semibold text-white shadow-lg shadow-brand-400/25 transition-all duration-300 hover:-translate-y-[3px] hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {enviando ? (
                                    <>
                                        <i className="pi pi-spin pi-spinner" aria-hidden="true" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <i className="pi pi-send" aria-hidden="true" />
                                        Enviar Solicitud
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

/** Campo accesible reutilizable: etiqueta + control + mensaje de error. */
interface CampoProps {
    id: string;
    label: string;
    requerido?: boolean;
    error?: string;
    children: React.ReactNode;
}

const Campo: React.FC<CampoProps> = ({ id, label, requerido, error, children }) => (
    <div className="flex flex-col">
        <label htmlFor={id} className="field-label">
            {label}
            {requerido && (
                <span className="ml-1 text-brand-500" aria-hidden="true">
                    *
                </span>
            )}
        </label>
        {children}
        {error && (
            <span id={`${id}-error`} role="alert" className="mt-1.5 text-[0.82rem] text-red-500">
                {error}
            </span>
        )}
    </div>
);

export default FormularioContacto;
