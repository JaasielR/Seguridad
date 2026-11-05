/**
 * Datos corporativos reales extraídos del Cuadernillo Operativo 2025-2026
 * de "Seguridad Interna de la Central de Abastos Ecatepec".
 *
 * Centralizados aquí para mantener una única fuente de verdad y que los
 * componentes de la landing permanezcan limpios y sin texto duplicado.
 */

export const EMPRESA = {
    nombre: "Seguridad Interna de la Central de Abastos Ecatepec",
    nombreCorto: "Seguridad Interna CDA Ecatepec",
    ubicacion: "Central de Abastos · Ecatepec, Estado de México",
    director: "Lic. Eusebio Ortega",
    cargo: "Director Operativo",
    telefono: "5529188467",
    // Número internacional para tel: del director operativo
    telefonoInternacional: "525529188467",
    // WhatsApp de contacto (formato internacional para enlaces wa.me)
    whatsapp: "5551852695",
    whatsappInternacional: "525551852695",
    email: "javier_9509@hotmail.com",
    horario: "24/7 · Los 365 días del año",
} as const;

/** Mensaje precargado del botón flotante de WhatsApp. */
export const WHATSAPP_MENSAJE =
    "Hola, deseo recibir información sobre sus servicios de seguridad privada.";

/** Lema tripartito de marca (estilo corporativo del sector). */
export const LEMA = ["Confianza", "Profesionalismo", "Reacción inmediata"] as const;

/** Valores que se muestran como chips en "Quiénes somos". */
export const VALORES = ["Excelencia", "Ética", "Capacitación continua", "Confidencialidad"] as const;

/** Enlace directo a WhatsApp con el mensaje automático. */
export const whatsappLink = (mensaje: string = WHATSAPP_MENSAJE): string =>
    `https://wa.me/${EMPRESA.whatsappInternacional}?text=${encodeURIComponent(mensaje)}`;

/** Servicio con icono PrimeIcons, título, resumen e imagen de /public. */
export interface ServicioInfo {
    id: number;
    icono: string;
    titulo: string;
    resumen: string;
    imagen: string;
}

/** Servicios operativos reales del cuadernillo. */
export const SERVICIOS: ServicioInfo[] = [
    {
        id: 1,
        icono: "pi pi-video",
        titulo: "Video Vigilancia CCTV",
        resumen:
            "Sistemas CCTV analógicos e IP con monitoreo 24/7 desde centro de control certificado, cámaras de alta resolución con visión nocturna e infrarroja.",
        imagen: "a.jpg",
    },
    {
        id: 2,
        icono: "pi pi-building",
        titulo: "Guardia Intramuros",
        resumen:
            "Protección, control y reacción al interior de las instalaciones: control de accesos, identificación de amenazas, rondines constantes y primeros auxilios.",
        imagen: "e.jpg",
    },
    {
        id: 3,
        icono: "pi pi-box",
        titulo: "Custodia de Mercancía",
        resumen:
            "Custodia de mercancía dentro y fuera de la Central, traslados seguros con unidades equipadas con torreta, faro buscador nocturno y monitoreo 24/7.",
        imagen: "f.jpg",
    },
    {
        id: 4,
        icono: "pi pi-user",
        titulo: "Protección a Personas",
        resumen:
            "Escolta y protección ejecutiva a locatarios y directivos, acompañamiento en traslado de valores y nómina, con protocolos de evacuación y rutas seguras.",
        imagen: "d.jpg",
    },
    {
        id: 5,
        icono: "pi pi-car",
        titulo: "Motopatrullas DM 250",
        resumen:
            "Unidades motocicletas para patrullaje en andenes y zonas de carga, respuesta inmediata ante incidentes y prevención de robo a carga y transporte.",
        imagen: "c.jpg",
    },
    {
        id: 6,
        icono: "pi pi-moon",
        titulo: "Recorridos Nocturnos Perimetrales",
        resumen:
            "Recorridos constantes del perímetro, vigilancia de bardas y accesos, detección de personas sospechosas y bitácora de novedades cada hora con fotografías.",
        imagen: "b.jpg",
    },
];

/** Beneficios diferenciadores de la empresa. */
export interface BeneficioInfo {
    icono: string;
    titulo: string;
    descripcion: string;
}

export const BENEFICIOS: BeneficioInfo[] = [
    {
        icono: "pi pi-users",
        titulo: "Personal altamente capacitado",
        descripcion:
            "Elementos confiables, capacitados en defensa personal y primeros auxilios.",
    },
    {
        icono: "pi pi-clock",
        titulo: "Cobertura 24/7",
        descripcion:
            "Vigilancia y monitoreo permanente los 365 días del año sin interrupciones.",
    },
    {
        icono: "pi pi-bolt",
        titulo: "Respuesta inmediata",
        descripcion:
            "Reacción ante amenazas, agresiones y siniestros reportando al C2 al instante.",
    },
    {
        icono: "pi pi-wifi",
        titulo: "Tecnología avanzada",
        descripcion:
            "CCTV, detección de movimiento, alarmas y unidades con torreta y faro buscador.",
    },
    {
        icono: "pi pi-verified",
        titulo: "Protocolos certificados",
        descripcion:
            "Protocolos de seguridad, evacuación y rutas seguras con personal certificado.",
    },
    {
        icono: "pi pi-eye",
        titulo: "Confidencialidad total",
        descripcion:
            "Trato profesional y discreto 24/7 en la custodia de personas y bienes.",
    },
];

/** Sectores atendidos (de la página "Guardia Intramuros"). */
export const SECTORES: string[] = [
    "Sector farmacéutico",
    "Fábricas",
    "Centro comercial",
    "Zona residencial",
    "Escuelas",
    "Hospital",
    "Hoteles",
    "Restaurante",
    "Bodegas",
    "Automotriz",
    "Naves industriales",
];

/** Testimonios de clientes para el carrusel. */
export interface TestimonioInfo {
    nombre: string;
    cargo: string;
    texto: string;
}

export const TESTIMONIOS: TestimonioInfo[] = [
    {
        nombre: "Roberto Méndez",
        cargo: "Locatario · Nave de abarrotes",
        texto:
            "Desde que contratamos el servicio, los recorridos nocturnos y el control de accesos nos dan total tranquilidad. La respuesta ante cualquier incidente es inmediata.",
    },
    {
        nombre: "Laura Figueroa",
        cargo: "Administradora · Bodega de perecederos",
        texto:
            "La custodia de mercancía y los traslados seguros han reducido por completo nuestras pérdidas. El personal es profesional y siempre está alerta.",
    },
    {
        nombre: "Ing. Carlos Rivas",
        cargo: "Director · Nave industrial",
        texto:
            "El sistema de video vigilancia CCTV y el monitoreo 24/7 son excelentes. Recibimos alertas en tiempo real y el soporte técnico es muy puntual.",
    },
    {
        nombre: "Patricia Sánchez",
        cargo: "Locataria · Zona de andenes",
        texto:
            "Las motopatrullas DM 250 recorren constantemente los andenes. Sentimos protección real en las zonas de carga y descarga a toda hora.",
    },
];

/** Registro / permiso de cumplimiento normativo. */
export interface CumplimientoInfo {
    entidad: string;
    registro: string;
}

/**
 * Legalidad y cumplimiento (sección inspirada en el sector).
 * NOTA: valores de ejemplo. Sustitúyelos por los permisos y registros
 * reales de la empresa cuando los tengas disponibles.
 */
export const CUMPLIMIENTO: CumplimientoInfo[] = [
    { entidad: "Gobierno del Estado de México", registro: "Permiso SSP en trámite" },
    { entidad: "Dirección General de Seguridad Privada", registro: "Registro operativo vigente" },
    { entidad: "Protección Civil Municipal", registro: "Protocolos de emergencia validados" },
    { entidad: "Capacitación y adiestramiento", registro: "Personal certificado 2025-2026" },
];

/** Beneficios numerados estilo "¿Por qué elegirnos?" (01–06). */
export interface RazonInfo {
    titulo: string;
    descripcion: string;
}

export const RAZONES: RazonInfo[] = [
    {
        titulo: "Personal rigurosamente seleccionado",
        descripcion:
            "Guardias y especialistas elegidos bajo criterios de confianza, responsabilidad y capacidad operativa.",
    },
    {
        titulo: "Capacitación continua",
        descripcion:
            "Formación constante en defensa personal, primeros auxilios y protocolos para fortalecer el desempeño.",
    },
    {
        titulo: "Tecnología aplicada",
        descripcion:
            "CCTV, detección de movimiento, alarmas y unidades equipadas con torreta y faro buscador nocturno.",
    },
    {
        titulo: "Supervisión y monitoreo 24/7",
        descripcion:
            "Seguimiento operativo permanente enfocado en la continuidad y calidad del servicio, reportando al C2.",
    },
    {
        titulo: "Soluciones personalizadas",
        descripcion:
            "Esquemas adaptados a los riesgos, el sector y las necesidades de cada locatario u operación.",
    },
    {
        titulo: "Atención cercana",
        descripcion:
            "Comunicación clara y trato profesional para construir relaciones de confianza a largo plazo.",
    },
];
