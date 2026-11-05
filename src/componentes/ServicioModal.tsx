import React from 'react';

interface ServicioModalProps {
    servicio: {
        id: number;
        titulo: string;
        descripcion: string;
        imagen: string;
    };
    esAbierto: boolean;
    onCerrar: () => void;
}

/**
 * Modal de detalle de servicio (tema claro - referencia GYPSE).
 */
const ServicioModal: React.FC<ServicioModalProps> = ({ servicio, esAbierto, onCerrar }) => {
    if (!esAbierto) return null;

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-brand-900/70 p-5 backdrop-blur-lg" onClick={onCerrar}>
            <div
                className="flex max-h-[90vh] w-full max-w-[900px] animate-modalFadeIn flex-col overflow-y-auto rounded-2xl bg-white shadow-[0_20px_60px_rgba(6,20,12,0.3)]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between border-b border-gray-100 px-8 py-6">
                    <h2 className="m-0 font-heading text-[1.5rem] font-bold text-ink-900">{servicio.titulo}</h2>
                    <button className="cursor-pointer border-none bg-transparent px-2 text-[2.5rem] leading-none text-ink-500 transition-colors duration-200 hover:text-brand-700" onClick={onCerrar}>&times;</button>
                </div>
                <div className="flex flex-wrap gap-8 p-8">
                    <div className="min-w-[280px] flex-1 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                        <img className="block h-full w-full rounded-xl object-cover" src={servicio.imagen} alt={servicio.titulo} />
                    </div>
                    <div className="min-w-[280px] flex-1 px-4">
                        <p className="text-[1.05rem] leading-[1.8] text-ink-500">{servicio.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicioModal;
