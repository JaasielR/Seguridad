import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { irASeccion } from "./irASeccion";

const MENU_ITEMS = [
  { label: "Inicio", icon: "pi pi-home", section: "inicio" },
  { label: "Quiénes somos", icon: "pi pi-id-card", section: "quienes-somos" },
  { label: "Servicios", icon: "pi pi-user", section: "servicios" },
  { label: "Contacto", icon: "pi pi-phone", section: "contacto" },
];

const MENU_EXTRA = [
  { label: "Compromiso", icon: "pi pi-check", section: "beneficios" },
  { label: "Relaciones de confianza", icon: "pi pi-users", section: "clientes" },
  { label: "Testimonios", icon: "pi pi-comment", section: "testimonios" },
  { label: "Legalidad", icon: "pi pi-shield", section: "cumplimiento" },
];

export default function MobileMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [abierto, setAbierto] = useState(false);
  const [masAbierto, setMasAbierto] = useState(false);

  const cerrar = () => {
    setAbierto(false);
    setMasAbierto(false);
  };

  const irA = (section: string) => {
    irASeccion(navigate, location.pathname, section);
    cerrar();
  };

  return (
    <>
      {/* Botón hamburguesa: visible solo en tablet y celular (< 1024px) */}
      <button
        onClick={() => setAbierto(true)}
        className="fixed top-4 right-4 z-[1000] flex h-12 w-12 items-center justify-center bg-white/90 text-brand-900 lg:hidden"
        aria-label="Abrir menú"
      >
        <i className="pi pi-bars" />
      </button>

      {/* Barra lateral - slide desde la derecha (tablet y celular) */}
      {abierto && (
        <div
          className="fixed inset-0 z-[1000] flex justify-end lg:hidden"
          onClick={cerrar}
          aria-hidden="true"
        >
          {/* Panel lateral derecho - fondo sólido */}
          <div
            className="relative flex w-20% flex-col bg-brand-900 text-white-900 shadow-2xl h-screen sm:w-25% lg:w-25% lg:hidden slide-in-right"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Menú lateral"
          >
            {/* Cabecera del panel */}
            <div className="flex items-center justify-between px-5 py-4 bg-brand-900">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-white e-900">
                  <i className="pi pi-shield" />
                </span>
                <span className="font-heading text-lg font-extrabold tracking-[2px] text-white">
                  Menú
                </span>
              </div>
              <button
                onClick={cerrar}
                className="flex h-8 w-8 items-center justify-center text-white hover:bg-gold-400/20 transition-colors"
                aria-label="Cerrar menú"
              >
                <i className="pi pi-times" />
              </button>
            </div>

            {MENU_ITEMS.map((item) => (
              <button
                key={item.section}
                onClick={() => irA(item.section)}
                className="w-full flex items-left justify-start gap-4 px-5 py-4 text-white hover:bg-gold-400/10 hover:text-white transition-colors bg-brand-900"
              >
                <i className={item.icon} />
                <span className="leading-tight">{item.label}</span>
              </button>
            ))}

            {/* Desplegable con el resto de secciones */}
            <button
              onClick={() => setMasAbierto((previo) => !previo)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-white hover:bg-gold-400/10 hover:text-white transition-colors bg-brand-900"
              aria-expanded={masAbierto}
            >
              <span className="flex items-center gap-4">
                <i className="pi pi-ellipsis-h" />
                <span className="leading-tight">Más</span>
              </span>
              <i className={`pi ${masAbierto ? "pi-chevron-up" : "pi-chevron-down"} text-sm`} />
            </button>

            {masAbierto && (
              <div className="flex flex-col border-l-2 border-gold-400/40 ml-5">
                {MENU_EXTRA.map((item) => (
                  <button
                    key={item.section}
                    onClick={() => irA(item.section)}
                    className="w-full flex items-left justify-start gap-4 px-5 py-3 text-white hover:bg-gold-400/10 hover:text-white transition-colors bg-brand-900"
                  >
                    <i className={item.icon} />
                    <span className="leading-tight">{item.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Sección: Cotización */}
            <button
              onClick={() => irA("contacto")}
              className="w-full flex items-center justify-center gap-3 px-3 py-6 text-base font-bold text-white bg-brand-900 hover:bg-navy-700 transition-colors"
            >
              <i className="pi pi-send" />
              Solicitar cotización
            </button>
          </div>
        </div>
      )}
    </>
  );
}
