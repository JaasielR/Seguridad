import { StrictMode, useState, useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from './App'
import("@styles/theme.scss");

/** Rutas que comparten página; cambiar entre ellas no debe mostrar el overlay. */
const GRUPOS_DE_PAGINA = [
    ["/home", "/quienes_somos", "/organizaciones", "/testimonios", "/permisos"],
    ["/servicios", "/porque_elegirnos"],
]

const mismaPagina = (a: string, b: string) =>
    GRUPOS_DE_PAGINA.some((grupo) => grupo.includes(a) && grupo.includes(b))

// Componente que maneja la pantalla de carga al cambiar de página
function AppWithLoading() {
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()
    const rutaAnterior = useRef(location.pathname)

    useEffect(() => {
        const anterior = rutaAnterior.current
        rutaAnterior.current = location.pathname

        // Navegar entre alias de la misma página (p. ej. /home → /permisos)
        // solo hace scroll, así que no mostramos la pantalla de carga.
        if (anterior !== location.pathname && mismaPagina(anterior, location.pathname)) {
            setIsLoading(false)
            return
        }

        // Mostrar la pantalla de carga
        setIsLoading(true)

        // Después de un breve retraso, ocultar la pantalla de carga
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 400)

        return () => {
            clearTimeout(timer)
        }
    }, [location.pathname])

    return (
        <>
            <App />
            {isLoading && (
                <div
                    id="loading-overlay"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/70 backdrop-blur-[10px] transition-opacity duration-1000 ease-out"
                >
                    <div className="loading-spinner"></div>
                    <div className="font-heading text-base font-bold tracking-[4px] text-brand-700">CARGANDO...</div>
                </div>
            )}
        </>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/Seguridad">
                <AppWithLoading />
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
