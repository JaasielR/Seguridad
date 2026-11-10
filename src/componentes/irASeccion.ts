import type { NavigateFunction } from "react-router-dom";

/** Identificador del último desplazamiento solicitado (invalida los pendientes). */
let solicitudActual = 0;

/**
 * Baja a una sección de la página actual.
 *
 * El primer desplazamiento se hace de inmediato y se repite cuando terminan de
 * cargar las fuentes (y una vez más tras un breve margen), porque la altura del
 * contenido puede cambiar y dejar la sección fuera del encabezado fijo.
 */
export function desplazarASeccion(seccion: string): void {
    const solicitud = ++solicitudActual;

    const ir = () => {
        if (solicitud !== solicitudActual) return;
        document.getElementById(seccion)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    ir();

    if (typeof document !== "undefined" && document.fonts?.ready) {
        document.fonts.ready.then(ir).catch(() => undefined);
    }

    window.setTimeout(ir, 700);
}

/** Vuelve al inicio de la página e invalida cualquier desplazamiento pendiente. */
export function irAlInicio(): void {
    solicitudActual++;
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

/**
 * Navega a una ruta y, opcionalmente, baja a una sección de esa página.
 *
 * - Si ya se está en la ruta, hace scroll suave sin recargar.
 * - Si la ruta no tiene sección, vuelve al inicio de la página.
 * - Si se viene de otra ruta, navega y la página destino hace el scroll.
 */
export function irASeccion(
    navigate: NavigateFunction,
    pathname: string,
    ruta: string,
    seccion?: string
): void {
    if (pathname === ruta) {
        if (seccion) {
            desplazarASeccion(seccion);
        } else {
            irAlInicio();
        }
        return;
    }

    navigate(ruta);
}
