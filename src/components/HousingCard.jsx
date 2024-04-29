import { Link } from "react-router-dom";
import LodgeTags from "./LodgeTags";

const HousingCard = ({ title, cover, id, tags, price }) => {
  return (
    <Link to={`/housing/${id}`} className="housing__card">
      <div className="overlay"></div>
      <img src={cover} alt={title} />
      <div className="housing__info">
        <div className="housing__name">
          <p>{title}</p>
          <span>{price} € / nuit</span>
        </div>
        <LodgeTags tags={tags} />
      </div>
    </Link>
  );
};

export default HousingCard;
