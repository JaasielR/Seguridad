import React from 'react';
import { EMPRESA } from "../../data/empresa";
const Contacto: React.FC = () => {
    return (
        <div className="page-shell">
            <header className="page-header">
                <h1 className="plate-heading">CONTACTO</h1>
                <p className="page-subtitle mt-4">¿Necesita servicios de seguridad? Contáctenos</p>
            </header>

            <section className="mx-auto flex max-w-[1200px] flex-wrap gap-10 px-4 py-10">
                <div className="flex flex-[1_1_400px] flex-col gap-5">
                    <div className="flex items-center gap-5 rounded-[10px] border border-gold-400/40 bg-navy-panel p-5 shadow-plate">
                        <span className="flex-shrink-0 text-[2em]">📞</span>
                        <div>
                            <span className="mb-[5px] block text-[0.9em] tracking-wide text-ivory-100">Teléfono</span>
                            <strong className="block text-[1.2em] font-bold text-gold-200">{EMPRESA.telefono}</strong>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 rounded-[10px] border border-gold-400/40 bg-navy-panel p-5 shadow-plate">
                        <span className="flex-shrink-0 text-[2em]">👤</span>
                        <div>
                            <span className="mb-[5px] block text-[0.9em] tracking-wide text-ivory-100">Director</span>
                            <strong className="block text-[1.2em] font-bold text-gold-200">Lic. Eusebio Ortega</strong>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 rounded-[10px] border border-gold-400/40 bg-navy-panel p-5 shadow-plate">
                        <span className="flex-shrink-0 text-[2em]">📍</span>
                        <div>
                            <span className="mb-[5px] block text-[0.9em] tracking-wide text-ivory-100">Cobertura</span>
                            <strong className="block text-[1.2em] font-bold text-gold-200">Distintas regiones</strong>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 rounded-[10px] border border-gold-400/40 bg-navy-panel p-5 shadow-plate">
                        <span className="flex-shrink-0 text-[2em]">🕐</span>
                        <div>
                            <span className="mb-[5px] block text-[0.9em] tracking-wide text-ivory-100">Horario</span>
                            <strong className="block text-[1.2em] font-bold text-gold-200">24/7</strong>
                        </div>
                    </div>
                </div>

                <div className="gold-panel flex-[1_1_500px] p-[30px] max-[700px]:p-5">
                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col">
                            <label htmlFor="nombre" className="field-label">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                placeholder="Ingrese su nombre"
                                className="field-input"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="field-label">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="su@correo.com"
                                className="field-input"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="telefono" className="field-label">Teléfono</label>
                            <input
                                type="tel"
                                id="telefono"
                                placeholder="55 1234 5678"
                                className="field-input"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="servicio" className="field-label">Servicio de interés</label>
                            <select id="servicio" className="field-input">
                                <option value="">Seleccione un servicio</option>
                                <option value="cctv">Video Vigilancia CCTV</option>
                                <option value="motopatrullas">Motopatrullas</option>
                                <option value="recorridos">Recorridos Nocturnos</option>
                                <option value="vigilancia">Vigilancia Fija</option>
                                <option value="custodia">Custodia de Personas</option>
                                <option value="proteccion">Protección a Directivos</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="mensaje" className="field-label">Mensaje</label>
                            <textarea
                                id="mensaje"
                                rows={5}
                                placeholder="Explique su necesidad de seguridad..."
                                className="field-input min-h-[120px] resize-y"
                            ></textarea>
                        </div>
                        <button type="submit" className="cursor-pointer rounded-lg border border-gold-400/60 bg-gold-sheen px-10 py-[15px] text-[1.05em] font-bold uppercase tracking-[2px] text-navy-900 shadow-gold transition-all duration-300 hover:-translate-y-[3px] hover:shadow-gold-lg">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </section>

            <footer className="site-footer">
                <p>Para más información, contacte al <strong>Lic. Eusebio Ortega</strong> al <strong>5529188467</strong></p>
                <p>Director Operativo · Grupo SICAE</p>
            </footer>
        </div>
    );
};

export default Contacto;
