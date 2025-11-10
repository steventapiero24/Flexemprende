import { Services } from "../../utils/bd"

const CardOtherServices = () => {
  return (
    <div>
        {Services.map((services, index) => (
                <div key={index} className="container__content-floating width-50">
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
    
  )
}

export default CardOtherServices