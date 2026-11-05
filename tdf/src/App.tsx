import Inicio from "@/pages/inicio/inicio.tsx";
import Title from "@/componentes/title.tsx";
import BasicDemo from "@/componentes/menu.tsx";
import { Routes, Route } from "react-router-dom";
import QuiénesSomos from "@/pages/quienes-somos/quienes-somos.tsx";
import Servicios from "@/pages/servicios/servicios.tsx";
import VideoVigilancia from "@/pages/video-vigilancia/video-vigilancia.tsx";
import Contacto from "@/pages/contacto/contacto.tsx";

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
