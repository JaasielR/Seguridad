import Inicio from "./pages/inicio/inicio";
import Title from "./componentes/title";
import DesktopMenu from "./componentes/desktopMenu";
import MobileMenu from "./componentes/menu";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import Servicios from "./pages/servicios/servicios";
import ServicioDetalle from "./pages/servicios/servicio-detalle";
import VideoVigilancia from "./pages/video-vigilancia/video-vigilancia";
import ContactoPage from "./pages/contacto/contacto-page";
import WhatsAppButton from "./componentes/WhatsAppButton";
import { irASeccion } from "./componentes/irASeccion";

/** Botón destacado del header: lleva al formulario de solicitud/cotización. */
function CotizacionButton() {
    const navigate = useNavigate();
    const location = useLocation();

    const solicitar = () => irASeccion(navigate, location.pathname, "/contacto");

    return (
        <button
            onClick={solicitar}
            className="hidden items-center gap-2 rounded-full border-2 border-brand-700 bg-brand-700 px-6 py-2.5 text-[0.85rem] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-600 hover:bg-brand-600 hover:text-white hover:shadow-md min-[1250px]:inline-flex"
        >
            <i className="pi pi-shield" aria-hidden="true" />
            Solicitar Cotización
        </button>
    );
}

function App() {
    return (
        <>
            <header className="fixed top-0 left-0 z-[1000] w-full border-b border-brand-100 bg-white/90 shadow-sm backdrop-blur-lg">
                <div className="flex w-full items-center justify-between gap-3 px-4 py-3 sm:px-6 xl:px-10">
                    <div className="flex items-center">
                        <h1 className="m-0">
                            <Title />
                        </h1>
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-3">
                        <DesktopMenu />
                        <MobileMenu />
                        <CotizacionButton />
                    </div>
                </div>
            </header>
            <Routes>
                {/* Página de inicio y alias de sus secciones */}
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Inicio />} />
                <Route path="/quienes_somos" element={<Inicio seccion="quienes-somos" />} />
                <Route path="/organizaciones" element={<Inicio seccion="clientes" />} />
                <Route path="/testimonios" element={<Inicio seccion="testimonios" />} />
                <Route path="/permisos" element={<Inicio seccion="cumplimiento" />} />

                {/* Página de servicios y alias de su sección */}
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/porque_elegirnos" element={<Servicios seccion="beneficios" />} />
                <Route path="/servicios/:id" element={<ServicioDetalle />} />

                {/* Contacto y página heredada de video vigilancia */}
                <Route path="/contacto" element={<ContactoPage />} />
                <Route path="/video-vigilancia" element={<VideoVigilancia />} />

                {/* Alias anteriores para no romper enlaces existentes */}
                <Route path="/inicio" element={<Navigate to="/home" replace />} />
                <Route path="/quienes-somos" element={<Navigate to="/quienes_somos" replace />} />
                <Route
                    path="/organizaciones_que_protegemos"
                    element={<Navigate to="/organizaciones" replace />}
                />
                <Route path="/permisos_y_registros" element={<Navigate to="/permisos" replace />} />

                {/* Cualquier URL desconocida vuelve al inicio (siempre con footer). */}
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>

            {/* Botón flotante de WhatsApp, visible en todas las pantallas */}
            <WhatsAppButton />
        </>
    );
}

export default App;
