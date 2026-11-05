import React from 'react';
import '../../styles/quienes-somos.css';

const QuiénesSomos: React.FC = () => {
    return (
        <div className="quienes-somos">
            <header className="header-quienes">
                <h1>QUIÉNES SOMOS</h1>
                <p className="subtitulo">Central de Abastos Ecatepec · Estado de México</p>
            </header>

            <section className="presentacion">
                <div className="presentacion-texto">
                    <h2>Misión</h2>
                    <p>
                        Debido a las actuales condiciones de inseguridad, se requiere contar con personal altamente calificado,
                        elementos confiables y un excelente desempeño operativo. Nace la <strong>Seguridad Interna de la Central de Abastos Ecatepec</strong>
                        para proveer esa seguridad a sus clientes, garantizando que sus negocios estén en buenas manos.
                    </p>
                </div>
                <div className="presentacion-imagen">
                    <div className="imagen-sello">
                        <span className="sello-texto">Sello de Calidad</span>
                    </div>
                </div>
            </section>

            <section className="vision">
                <div className="vision-texto">
                    <h2>Visión</h2>
                    <p>
                        Ser la empresa líder en seguridad privada a nivel nacional, reconocida por su confianza, innovación
                        y excelencia operativa en la prestación de servicios de seguridad.
                    </p>
                </div>
                <div className="vision-imagen">
                    <div className="imagen-breve">
                        <span className="breve-texto">Seguridad que protege, confianza que se refleja</span>
                    </div>
                </div>
            </section>

            <footer className="footer-servicios">
                <p>Para más información, contacte al <strong>Lic. Eusebio Ortega</strong> al <strong>5529188467</strong></p>
                <p>Director Operativo · Central de Abastos Ecatepec, Estado de México</p>
            </footer>
        </div>
    );
};

export default QuiénesSomos;
