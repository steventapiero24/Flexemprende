import React from 'react';
import ImageTrail from './ImageTrail';
import { images } from '../utils/bd';

const Hero = () => {
    return (
        <div className='container overflow-hidden relative container__hero'>
            <ImageTrail items={images.map(i => i.url)} alt={images.map(i => i.alt)} variant={1} />
            <div className='container__hero-content width-100'>
                <h1>Somos la pieza que le faltaba a tu negocio para dar el salto digital.</h1>
                <p>Te ayudamos a tener presencia online, atraer clientes y vender más — sin estrés, sin tecnicismos, sin procesos eternos.</p>
                <div className='flex flex-center'>
                        Animacion Scoll
                </div>
            </div>
        </div>
    );
};

export default Hero;
