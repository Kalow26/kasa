import { Link } from "react-router-dom";

const HousingCard = ({ title, cover, id }) => {
  return (
    <Link to={`/housing/${id}`}>
      <div className="overlay"></div>
      <img src={cover} alt={title} />
      <p className="card__title">{title}</p>
    </Link>
  );
};

export default HousingCard;
