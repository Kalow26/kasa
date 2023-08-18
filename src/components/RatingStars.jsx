import emptystar from "../assets/star-empty.svg";
import fullstar from "../assets/star-full.svg";

const RatingStars = ({ rating }) => {
    const totalStars = 5;
    const totalRedStars = Math.min(rating, totalStars);
    const totalGrayStars = totalStars - totalRedStars;
    
    return (
      <ul className="lodge__content__rating">
        {Array.from({ length: totalRedStars }).map((_, index) => (
          <li key={index}><img src={fullstar} alt="rating icon" aria-hidden="true" /></li>
        ))}
        {Array.from({ length: totalGrayStars }).map((_, index) => (
          <li key={index}><img src={emptystar} alt="rating icon" aria-hidden="true" /></li>
        ))}
        <span className="sr-only">Note de {totalRedStars} sur {totalStars}</span>
      </ul>
    );
  }

export default RatingStars;