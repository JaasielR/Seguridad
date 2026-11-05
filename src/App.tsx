import Inicio from "./pages/inicio/inicio";
import Title from "./componentes/title";
import BasicDemo from "./componentes/menu";
import { Routes, Route } from "react-router-dom";
import QuiénesSomos from "./pages/quienes-somos/quienes-somos";
import Servicios from "./pages/servicios/servicios";
import VideoVigilancia from "./pages/video-vigilancia/video-vigilancia";
import Contacto from "./pages/contacto/contacto";

function App() {
    return (
        <>
            <header className="menu-fijo">
                <div className="header-grid">
                    <div className="logo-container">
                        <h1 className="title">
                            <Title />
                        </h1>
                    </div>
                    <div className="menu-container">
                        <BasicDemo />
                    </div>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/quienes-somos" element={<QuiénesSomos />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/video-vigilancia" element={<VideoVigilancia />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </>
    );
}

export default App;
