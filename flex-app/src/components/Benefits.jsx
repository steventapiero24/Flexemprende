import React from 'react';
import { imagesBenefits } from '../utils/bd';

const Benefits = () => {
    return (
        <div className='container__benefits'>
            <div className='container__benefits-content flex'>
                <div className='width-100 fixed container__benefits-content-text'>
                    <h2>¿Tu negocio necesita una web profesional?</h2>
                    <p>Tu cliente ya está buscando en Internet.
                        Si no te ve, compra en otro lado. Así de simple.</p>
                </div>
                <div className='width-100 wrapper container__benefits-content-images'>
                    <div className=''>
                        {imagesBenefits.map((image, index) => (
                            <div key={index}>
                                <img src={image.url} alt={image.title || ""} />
                                <h3>{image.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits;