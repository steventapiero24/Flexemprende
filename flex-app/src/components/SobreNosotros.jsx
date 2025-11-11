
import React from "react";
import CountUp from "./Atomos/CountUp";
import Carousel from "./Atomos/Carousel";


const SobreNosotros = () => {
    return (
        <div className="container flex flex-col container__sobrenosotros">
            <div className="Container__counters width-100 flex flex-center flex-around ">
                <div className="flex flex-col flex-center justify-center ">
                    <CountUp
                        from={0}
                        to={90}
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
                        to={120}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                    />
                    <h3>Clientes generados</h3>
                </div>
                <div className="flex flex-col flex-center justify-center ">
                    <CountUp
                        from={0}
                        to={30}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                    />
                    <h3>Marcas creadas</h3>
                </div>
                <div className="flex flex-col flex-center justify-center ">
                    <CountUp
                        from={0}
                        to={6}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                    />
                    <h3>Años de experiencia</h3>
                </div>
            </div>
            <div className="container__Sobrenosotroscontent">
                <div className="container__content-floating width-50">
                    <h5>Branding + Web en un solo proceso</h5>
                    <h3>Una marca sólida. Una web que convierte.
                        Todo en un solo proceso, hecho para negocios reales.
                    </h3>
                    <p>No necesitas saber de diseño ni tecnología.
                        Yo me encargo de todo para que tu negocio tenga una presencia digital completa y profesional.</p>
                    <button className="btn btn-primary btn-lg">
                        Agendar una llamada
                    </button>
                </div>
                <div className="container__content-Text width-50">
                    <Carousel
                        baseWidth={600}
                        autoplay={true}
                        autoplayDelay={4000}
                        pauseOnHover={true}
                        loop={true}
                        round={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default SobreNosotros