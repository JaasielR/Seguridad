import React from "react";
import { useParams } from "react-router-dom";
import MotopatrullasDetalle from "./MotopatrullasDetalle";
import RecorridosNocturnosDetalle from "./RecorridosNocturnosDetalle";
import VideoVigilanciaDetalle from "./VideoVigilanciaDetalle";
import ProteccionPersonasDetalle from "./ProteccionPersonasDetalle";
import GuardiaIntramurosDetalle from "./GuardiaIntramurosDetalle";
import CustodiaMercanciaDetalle from "./CustodiaMercanciaDetalle";
import SiteFooter from "../../componentes/landing/SiteFooter";

/**
 * Página individual de cada servicio.
 *
 * El `id` se obtiene de la ruta /servicios/:id.
 *
 * El listado del inicio (`SERVICIOS`) usa los ids 1 a 6 y la página
 * /servicios usa los ids 7 a 12 para no duplicar servicios:
 *
 *   1/7  → Video Vigilancia CCTV
 *   2    → Guardia Intramuros
 *   3/11 → Custodia de Mercancía
 *   4    → Protección a Personas
 *   5/8  → Motopatrullas DM 250
 *   6/9  → Recorridos Nocturnos Perimetrales
 *
 * El resto de servicios mantiene la página en construcción.
 */
const ServicioDetalle: React.FC = () => {
    const { id } = useParams();

    let detalle: React.ReactNode;

    if (id === "6") {
        detalle = <VideoVigilanciaDetalle />;
    } else if (id === "1") {
        detalle = <GuardiaIntramurosDetalle />;
    } else if (id === "2") {
        detalle = <CustodiaMercanciaDetalle />;
    } else if (id === "3") {
        detalle = <ProteccionPersonasDetalle />;
    } else if (id === "4") {
        detalle = <MotopatrullasDetalle />;
    } else if (id === "5") {
        detalle = <RecorridosNocturnosDetalle />;
    } else {
        detalle = (
            <div className="page-shell">
                <header className="page-header">
                    <h1 className="plate-heading">Detalles del servicio</h1>
                    <p className="page-subtitle">Página en construcción · servicio {id}</p>
                </header>

                <section className="mx-auto max-w-[1200px] flex-1 px-4 py-10">
                    {/* Aquí se mostrará la información detallada del servicio. */}
                </section>
            </div>
        );
    }

    return (
        <>
            {detalle}
            <SiteFooter />
        </>
    );
};

export default ServicioDetalle;
