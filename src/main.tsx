import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from './App'
import("@styles/theme.scss");


// Componente que maneja la pantalla de carga al cambiar de página
function AppWithLoading() {
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()

    useEffect(() => {
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
