import React from 'react';
import { Button } from "primereact/button";

const Home: React.FC = () => {
    return (
        <section>
            <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center text-text-cream">
                <h1 className="mb-4 text-[2.3em] font-extrabold uppercase tracking-[4px] gold-text-fill">GRUPO SICAE</h1>
                <p className="mb-5 text-[1.15em] italic tracking-wide text-ivory-100">Gran alcance · Cobertura en distintas regiones</p>
                <p className="mb-6 max-w-[700px] text-[1.1em] text-ivory-200">
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
