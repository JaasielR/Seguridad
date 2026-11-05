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

const ServicioModal: React.FC<ServicioModalProps> = ({ servicio, esAbierto, onCerrar }) => {
    if (!esAbierto) return null;

    return (
        <div className="modal-overlay" onClick={onCerrar}>
            <div className="modal-servicio" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{servicio.titulo}</h2>
                    <button className="modal-close" onClick={onCerrar}>&times;</button>
                </div>
                <div className="modal-content">
                    <div className="modal-imagen">
                        <img src={servicio.imagen} alt={servicio.titulo} />
                    </div>
                    <div className="modal-descripcion">
                        <p>{servicio.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicioModal;
