import React from 'react';
import ImageTrail from './ImageTrail';
import { images } from '../utils/bd';

const Hero = () => {
    return (
        <div className='container overflow-hidden relative container__hero'>
            <ImageTrail items={images.map(i => i.url)} alt={images.map(i => i.alt)} variant={1} />
            <div className='container__hero-content width-100'>
                <h1>Transformo tu negocio local en una marca digital moderna</h1>
                <p>Creo marcas y páginas web que ayudan a negocios locales a destacar, atraer clientes y vender más, sin complicaciones.</p>
                <div className='flex flex-center'>
                        Animacion Scoll
                </div>
            </div>
        </div>
    );
};

export default Hero;
