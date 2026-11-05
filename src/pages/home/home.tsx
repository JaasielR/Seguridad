import React from 'react';
import '../../styles/home.css';
import { Button } from "primereact/button";

const Home: React.FC = () => {
    return (
        <section>
            <div className="hero">
                <h1>SEGURIDAD INTERNA</h1>
                <p className="hero-subtitulo">Central de Abastos Ecatepec · Estado de México</p>
                <p>
                    Soluciones integrales de seguridad privada para proteger tu negocio
                </p>
                <Button
                    label="Explorar Servicios"
                    icon="pi pi-arrow-right"
                    className="explorar-btn"
                />
            </div>
        </section>
    );
};

export default Home;
