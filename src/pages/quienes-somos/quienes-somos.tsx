import React from 'react';

const QuiénesSomos: React.FC = () => {
    return (
        <div className="page-shell">
            <header className="page-header">
                <h1 className="plate-heading text-[2.8em]">QUIÉNES SOMOS</h1>
                <p className="page-subtitle mt-4">Central de Abastos Ecatepec · Estado de México</p>
            </header>

            <section className="ivory-section mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-10 text-left md:flex-row">
                <div className="flex-1 md:p-[20px]">
                    <h2 className="ivory-title">Misión</h2>
                    <div className="gold-rule mx-0 w-32"></div>
                    <p className="ivory-text">
                        Debido a las actuales condiciones de inseguridad, se requiere contar con personal altamente calificado,
                        elementos confiables y un excelente desempeño operativo. Nace la <strong className="text-navy-800">Seguridad Interna de la Central de Abastos Ecatepec</strong>
                        para proveer esa seguridad a sus clientes, garantizando que sus negocios estén en buenas manos.
                    </p>
                </div>
                <div className="flex flex-shrink-0 items-center justify-center md:basis-[320px]">
                    <div className="gold-box">
                        <span className="block text-[1.2em] font-bold tracking-[3px] text-navy-900">Sello de Calidad</span>
                    </div>
                </div>
            </section>

            <section className="split-section">
                <div className="flex-1 p-[30px]">
                    <h2 className="section-title">Visión</h2>
                    <p className="body-text">
                        Ser la empresa líder en seguridad privada a nivel nacional, reconocida por su confianza, innovación
                        y excelencia operativa en la prestación de servicios de seguridad.
                    </p>
                </div>
                <div className="flex flex-shrink-0 items-center justify-center md:basis-[350px]">
                    <div className="gold-box">
                        <span className="block text-[1.05em] font-semibold tracking-wide text-navy-900">Seguridad que protege, confianza que se refleja</span>
                    </div>
                </div>
            </section>

            <footer className="site-footer">
                <p>Para más información, contacte al <strong>Lic. Eusebio Ortega</strong> al <strong>5529188467</strong></p>
                <p>Director Operativo · Central de Abastos Ecatepec, Estado de México</p>
            </footer>
        </div>
    );
};

export default QuiénesSomos;
