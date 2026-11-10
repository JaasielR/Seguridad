import { useState } from "react";
import {
    AutoComplete,
    type AutoCompleteChangeEvent,
    type AutoCompleteCompleteEvent
} from "primereact/autocomplete";
import { useNavigate } from "react-router-dom";

interface Opcion {
    label: string;
    ruta: string;
}

export default function BusquedaMenu() {

    const navigate = useNavigate();

    const opciones: Opcion[] = [
        { label: "Quiénes Somos", ruta: "/quienes_somos" },
        { label: "Servicios", ruta: "/servicios" },
        { label: "Video Vigilancia", ruta: "/video-vigilancia" },
        { label: "Contacto", ruta: "/contacto" }
    ];

    const [seleccionado, setSeleccionado] = useState<Opcion | null>(null);
    const [sugerencias, setSugerencias] = useState<Opcion[]>([]);

    const buscar = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        const filtradas = opciones.filter(opcion =>
            opcion.label.toLowerCase().includes(query)
        );

        setSugerencias(filtradas);
    };

    const cambiar = (e: AutoCompleteChangeEvent) => {
        setSeleccionado(e.value);

        if (e.value?.ruta) {
            navigate(e.value.ruta);
        }
    };

    return (
        <AutoComplete
            value={seleccionado}
            suggestions={sugerencias}
            completeMethod={buscar}
            field="label"
            dropdown
            placeholder="Buscar servicio..."
            onChange={cambiar}
        />
    );
}
