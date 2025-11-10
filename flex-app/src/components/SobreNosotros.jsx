
import React from "react";
import CountUp from "./utils/CountUp";
import Carousel from "./utils/Carousel";


const SobreNosotros = () => {
    return (
        <div className="container flex flex-col container__sobrenosotros"> 
            <div className="Container__counters width-100 flex flex-center flex-around ">
                <div className="flex flex-col flex-center justify-center ">  
                    <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    />
                    <h3>Webs diseñadas</h3>
                </div>
                <div className="flex flex-col flex-center justify-center ">  
                    <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    />
                    <h3>Webs diseñadas</h3>
                </div>
                <div className="flex flex-col flex-center justify-center ">  
                    <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    />
                    <h3>Webs diseñadas</h3>
                </div>
                <div className="flex flex-col flex-center justify-center ">  
                    <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    />
                    <h3>Webs diseñadas</h3>
                </div>
            </div>
            <div className="container__Sobrenosotroscontent">
                <div className="container__content-floating width-50">
                    <h3>Construyo webs que convertir visitas en clientes, con:</h3>
                    <ul className="flex flex-col">
                        <li>
                            <div className="container__content-floating_viñeta"></div>
                            Diseño moderno alineado a tu marca
                        </li>
                        <li>
                            <div className="container__content-floating_viñeta"></div>
                            Botón directo a WhatsApp
                        </li>
                        <li>
                            <div className="container__content-floating_viñeta"></div>
                            Formularios de reservas/citas
                        </li>
                        <li>
                            <div className="container__content-floating_viñeta"></div>
                            Menú digital / catálogo
                        </li>
                        <li>
                            <div className="container__content-floating_viñeta"></div>
                            SEO local para aparecer en Google
                        </li>
                        <li>
                            <div className="container__content-floating_viñeta"></div>
                            Copywriting y estructura comercial
                        </li>
                    </ul>
                <button className="btn btn-primary btn-lg">
                    Agendar una llamada
                </button>
                </div>
                <div className="container__content-Text width-50">
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default SobreNosotros