import { tarifas } from "../../utils/bd"

const CardPrices = () => {
  return (
    <div className="flex  flex-center justify-center container__precio ">
      {tarifas.map((tarifa, index) => (
        <div key={index} className="flex flex-col card-prices flex-nowrap">
          <h3>{tarifa.title}</h3>
          <p>{tarifa.descriptions}</p>
          <ul>
            {tarifa.includes.list.map((item, itemIndex) => (
              <li key={itemIndex}>
                <div className="item-card"></div>
                {item}
              </li>
            ))}
          </ul>
          <span>{tarifa.price}€</span>
          <span className="entrega">{tarifa.Entrega}</span>
        </div>
      ))}
    </div>
  )
}

export default CardPrices