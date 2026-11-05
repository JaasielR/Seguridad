import React, { useState } from 'react';
import ServicioModal from '../../componentes/ServicioModal';

interface Servicio {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
}

const servicios: Servicio[] = [
    {
        id: 1,
        titulo: 'Video Vigilancia CCTV',
        descripcion: 'Instalación profesional de sistemas CCTV analógicos e IP, monitoreo 24/7 desde centro de control certificado, cámaras de alta resolución con visión nocturna e infrarroja, grabación en la nube y respaldo local con acceso remoto.',
        imagen: 'a.jpg'
    },
    {
        id: 2,
        titulo: 'Motopatrullas DM 250',
        descripcion: 'Unidades motocicletas con equipamiento completo para patrullaje en andenes y zonas de carga, respuesta inmediata 24/7 ante incidentes, prevención de robo a carga y transporte, control de acceso y vigilancia de vehículos.',
        imagen: 'c.jpg'
    },
    {
        id: 3,
        titulo: 'Recorridos Nocturnos Perimétrales',
        descripcion: 'Recorridos nocturnos constantes alrededor del perímetro, vigilancia de bardas y accesos, detección de personas sospechosas fuera de horario, reporte inmediato a C2, verificación de alumbrado y cámaras, prevención de intrusión y robo.',
        imagen: 'b.jpg'
    },
    {
        id: 4,
        titulo: 'Vigilancia Fija y Control de Accesos',
        descripcion: 'Vigilancia fija en bodegas, naves y accesos 24/7, control de acceso peatonal y vehicular con registro, revisión de credenciales y gafetes, custodia de bodegas durante cierre, rondines intramuros cada 30 minutos.',
        imagen: 'e.jpg'
    },
    {
        id: 5,
        titulo: 'Custodia de Personas y Mercancías',
        descripcion: 'Custodia de mercancía dentro y fuera de la Central, traslados seguros y escolta a directivos, unidades con torreta, faro buscador nocturno y monitoreo 24/7, personal capacitado y alerta ante cualquier situación.',
        imagen: 'f.jpg'
    },
    {
        id: 6,
        titulo: 'Protección a Directivos',
        descripcion: 'Escoltas ejecutivas, protección en apertura y cierre de bodegas de alto valor, acompañamiento en traslado de valores y nómina, protocolos de emergencia y evacuación, trato profesional 24/7.',
        imagen: 'd.jpg'
    },
];

const Servicios: React.FC = () => {
    const [servicioAbierto, setServicioAbierto] = useState<number | null>(null);

    const abrirServicio = (id: number) => {
        setServicioAbierto(id);
    };

    const cerrarServicio = () => {
        setServicioAbierto(null);
    };

    return (
        <div className="page-shell">
            <header className="page-header">
                <h1 className="plate-heading">Nuestros Servicios</h1>
            </header>

            <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-[30px] px-4 py-10 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
                {servicios.map((servicio) => (
                    <div
                        key={servicio.id}
                        className="group relative flex h-full min-h-[180px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[15px] border border-gold-400/50 bg-navy-panel p-6 text-center shadow-plate transition-all duration-300 hover:-translate-y-2 hover:border-gold-300 hover:shadow-gold-lg"
                        onClick={() => abrirServicio(servicio.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                abrirServicio(servicio.id);
                            }
                        }}
                    >
                        <span className="absolute inset-x-0 top-0 h-[3px] bg-gold-bar opacity-80"></span>
                        <h3 className="relative z-[1] text-[1.4em] font-extrabold uppercase leading-[1.4] tracking-[2px] gold-text-fill">{servicio.titulo}</h3>
                        <span className="relative z-[1] mt-3 text-[0.8em] uppercase tracking-[3px] text-ivory-300 transition-colors group-hover:text-gold-200">Ver detalle</span>
                    </div>
                ))}
            </section>

            <ServicioModal
                servicio={
                    servicios.find(s => s.id === servicioAbierto) || {
                        id: 0,
                        titulo: '',
                        descripcion: '',
                        imagen: ''
                    }
                }
                esAbierto={servicioAbierto !== null}
                onCerrar={cerrarServicio}
            />

            <footer className="site-footer">
                <p>Para más información, contacte al <strong>Lic. Eusebio Ortega</strong> al <strong>5529188467</strong></p>
                <p>Director Operativo · Central de Abastos Ecatepec, Estado de México</p>
            </footer>
        </div>
    );
};

export default Servicios;
