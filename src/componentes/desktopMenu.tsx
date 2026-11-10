import { Menubar } from 'primereact/menubar';
import type {MenuItem} from 'primereact/menuitem';
import {useLocation, useNavigate} from "react-router-dom";
import { irASeccion } from "./irASeccion";

export default function DesktopMenu() {

    const navigate = useNavigate();
    const location = useLocation();

    /** Navega a una ruta y, si aplica, baja a la sección indicada. */
    const irA = (ruta: string, seccion?: string) =>
        irASeccion(navigate, location.pathname, ruta, seccion);

    const items: MenuItem[] = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            command: () => irA("/home")
        },
        {
            label: 'Quiénes somos',
            icon: 'pi pi-id-card',
            command: () => irA("/quienes_somos", "quienes-somos")
        },
        {
            label: 'Servicios',
            icon: 'pi pi-user',
            command: () => irA("/servicios")
        },
        {
            label: 'Contacto',
            icon: 'pi pi-phone',
            command: () => irA("/contacto")
        },
    ];

    return (
        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <Menubar model={items} />
        </div>
    );
}
