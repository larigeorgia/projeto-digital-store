import PropTypes from "prop-types"
import { Link } from "react-router-dom"


function CardInformations({title, dados}) {
    
    const infoCard = dados.map(({id, link, text})=>{
        return (
            <Link key={id} to={link} style={{textDecoration:"none"}} className="card__item">
                {text}
            </Link>
        )
    } )

  return (
    <div className="cardInformations">
        <h2 className="cardInformations__title">
            {title}
        </h2>
        <ul className="cardInformations__list">
            {infoCard}
        </ul>
    </div>
  )
}
CardInformations.propTypes = {
    title: PropTypes.string.isRequired,
    dados: PropTypes.array
}


export default CardInformations

