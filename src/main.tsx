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
                <div className="loading-overlay" id="loading-overlay">
                    <div className="loading-spinner"></div>
                    <div className="loading-text">CARGANDO...</div>
                </div>
            )}
        </>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
                <div style={{ filter: 'blur(8px)' }} className="background-fondo" />
        <Provider store={store}>
            <BrowserRouter basename="/Seguridad">
                <div className="background-fondo" style={{ filter: 'blur(8px)' }} />
                <AppWithLoading />
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
