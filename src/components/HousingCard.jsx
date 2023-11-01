import { Link } from "react-router-dom";

const HousingCard = (props) => {
    const {title, cover, id, index} = props
  return (
    <div className="card" style={{animationDelay: `${index *20}ms`}}>
      <Link to={`/housing/${id}`}>
        <div className="overlay"></div>
        <img src={cover} alt={title}/>
        <p className="card__title">{title}</p>
      </Link>
    </div>
  )
}

export default HousingCard