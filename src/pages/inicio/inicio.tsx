import '../../styles/inicio.css';
import React from "react";
import {Button} from "primereact/button";

const Inicio: React.FC = () => {
    return (
        <div id="inicio" className="hero">
            <div className="hero-contenido">
                <h1 className="titulo-principal">
                    SEGURIDAD INTERNA CENTRAL DE ABASTOS
                </h1>
                <p className="hero-subtitulo">Central de Abastos Ecatepec · Estado de México</p>
                <Button
                    label="Explorar Servicios"
                    icon="pi pi-arrow-right"
                    onClick={() => {
                        document
                            .getElementById("servicios")
                            ?.scrollIntoView({ behavior: "smooth" });
                    }}
                />
            </div>
        </div>
    );
};

export default Inicio;
