import { tarifas } from "../../utils/bd"

const CardPrices = () => {
  return (
    <div>
      {tarifas.map((tarifa, index) => (
        <div key={index} className="flex flex-col card-prices">
          <h3>{tarifa.title}</h3>
          <h4>{tarifa.description}</h4>
          <ul>
            {tarifa.includes.list.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
          <span>{tarifa.price}€</span>
        </div>
      ))}
    </div>
  )
}

export default CardPrices