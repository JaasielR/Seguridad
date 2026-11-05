import { MegaMenu } from 'primereact/megamenu';
import type {MenuItem} from 'primereact/menuitem';
import {useLocation, useNavigate} from "react-router-dom";

export default function BasicDemo() {

    const navigate = useNavigate();
    const location = useLocation();

    const irAInicio = () => {
        if (location.pathname === "/") {
            document.getElementById("inicio")?.scrollIntoView({
                behavior: "smooth"
            });
        } else {
            navigate("/", { state: { scrollTo: "inicio" } });
        }
    };

    const items: MenuItem[] = [
        {
            label: 'INICIO',
            icon: 'pi pi-home',
            command: irAInicio
        },
        {
            label: 'QUIÉNES SOMOS',
            icon: 'pi pi-id-card',
            command: () => navigate("/quienes-somos")
        },
        {
            label: 'SERVICIOS',
            icon: 'pi pi-shield-alt',
            command: () => navigate("/servicios")
        },
        {
            label: 'VIDEO VIGILANCIA',
            icon: 'pi pi-video',
            command: () => navigate("/video-vigilancia")
        },
        {
            label: 'CONTACTO',
            icon: 'pi pi-phone',
            command: () => navigate("/contacto")
        },
    ];

    return (
        <div className="card">
            <MegaMenu model={items} breakpoint="960px" />
        </div>
    );
}
