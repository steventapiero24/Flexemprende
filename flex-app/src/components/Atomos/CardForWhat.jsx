import { cardsForWhat } from '../../utils/bd'

const CardForWhat = () => {
    return (
        <div className="scroll-stack-card">
            {
                cardsForWhat.map((item, index) => (
                    <div key={index} className=" flex scroll-stack-card-item">
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                        <div>
                            <img src={item.urlImage} alt={item.title} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CardForWhat