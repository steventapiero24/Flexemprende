import React from 'react';
import { imagesBenefits } from '../utils/bd';
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import DecayCard from './DecayCard';



const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const Benefits = () => {
    return (
        <div className='container__benefits'>
            <div className='container__benefits-content flex'>
                <div className='width-50 fixed container__benefits-content-text flex-col'>
                    <h2>¿Tu negocio necesita una web profesional?</h2>
                    <p>Tu cliente ya está buscando en Internet.
                        Si no te ve, compra en otro lado. Así de simple.</p>
                    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                        <LogoLoop
                            logos={techLogos}
                            speed={120}
                            direction="left"
                            logoHeight={48}
                            gap={40}
                            pauseOnHover
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#211AC0"
                            ariaLabel="Technology partners"
                        />
                    </div>
                </div>
                <div className='width-50 wrapper container__benefits-content-images'>
                    <div>
                        {imagesBenefits.map((image, index) => (
                            <div key={index} className='container__benefits-content-images-content'>
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