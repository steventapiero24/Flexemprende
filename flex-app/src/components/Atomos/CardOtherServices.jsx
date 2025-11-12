import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Services } from "../../utils/bd";

const CardOtherServices = () => {
  const cardsRef = useRef([]);
  const defaultWidth = 400; // Ancho por defecto de cada card
  const expandedWidth = 830; // Ancho expandido

  useEffect(() => {
    const cards = cardsRef.current;

    // Establecer ancho inicial
    cards.forEach((card) => {
      gsap.set(card, { width: defaultWidth });
    });

    cards.forEach((card, index) => {
      const handleMouseEnter = () => {
        // Expandir la card actual
        gsap.to(card, {
          width: expandedWidth,
          duration: 0.5,
          ease: 'power2.out'
        });

        // Mantener las demás en su ancho por defecto
        cards.forEach((otherCard, otherIndex) => {
          if (otherIndex !== index) {
            gsap.to(otherCard, {
              width: defaultWidth,
              duration: 0.5,
              ease: 'power2.out'
            });
          }
        });
      };

      const handleMouseLeave = () => {
        // Volver todas al ancho por defecto
        gsap.to(card, {
          width: defaultWidth,
          duration: 0.5,
          ease: 'power2.out'
        });
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        if (card) {
          card.removeEventListener('mouseenter', () => {});
          card.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);

  return (
    <div className="flex container__otherServices">
      {Services.map((services, index) => (
        <div 
          key={index} 
          ref={(el) => (cardsRef.current[index] = el)}
          className="container__otherServices-card"
        >
          <span>{services.number}</span>
          <h3>{services.title}</h3>
          <ul>
            {services.items.value.map((value, valueIndex) => (
              <li key={valueIndex}>{value}</li>
            ))}
          </ul>
          <img src={services.urlImage} alt={services.title} />
          <p>{services.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardOtherServices;