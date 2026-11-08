import Inicio from "./pages/inicio/inicio";
import Title from "./componentes/title";
import DesktopMenu from "./componentes/desktopMenu";
import MobileMenu from "./componentes/menu";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import QuiénesSomos from "./pages/quienes-somos/quienes-somos";
import Servicios from "./pages/servicios/servicios";
import ServicioDetalle from "./pages/servicios/servicio-detalle";
import VideoVigilancia from "./pages/video-vigilancia/video-vigilancia";
import Contacto from "./pages/contacto/contacto";
import WhatsAppButton from "./componentes/WhatsAppButton";

/** Botón destacado del header: lleva al formulario de solicitud/cotización. */
function CotizacionButton() {
    const navigate = useNavigate();
    const location = useLocation();

    const solicitar = () => {
        if (location.pathname === "/") {
            document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/", { state: { scrollTo: "contacto" } });
        }
    };

    return (
        <button
            onClick={solicitar}
            className="hidden items-center gap-2 rounded-full border-2 border-brand-700 bg-transparent px-6 py-2.5 text-[0.85rem] font-semibold text-brand-700 transition-all duration-300 hover:border-brand-600 hover:bg-brand-600 hover:text-white min-[1250px]:inline-flex"
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
                <Route path="/" element={<Inicio />} />
                <Route path="/quienes-somos" element={<QuiénesSomos />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/servicios/:id" element={<ServicioDetalle />} />
                <Route path="/video-vigilancia" element={<VideoVigilancia />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>

            {/* Botón flotante de WhatsApp, visible en todas las pantallas */}
            <WhatsAppButton />
        </>
    );
}

export default App;
