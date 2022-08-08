import data from "../data"
import Card from "./Card"

export default function CardContainer() {
    let index = 0
    const cards = data.map(card => {
        index++

        return(
            <Card
                key={index}
                info={card}
            />
        )
    })
        

    return (
        <div className="card-container">
            {cards}
        </div>
    )
}