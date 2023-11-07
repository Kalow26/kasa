import emptystar from "../assets/star-empty.svg";
import fullstar from "../assets/star-full.svg";

const RatingStars = ({ rating }) => {
  const totalStars = 5;
  const StarsArray = [];

  for (let i = 1; i <= totalStars; i++) {
    StarsArray.push(
      <li key={i}>
        <img
          src={i <= rating ? fullstar : emptystar}
          alt="rating icon"
          aria-hidden="true"
        />
      </li>
    );
  }

  return (
    <ul className="lodge__content__rating">
      {StarsArray}
      <span className="sr-only">
        Note de {rating} sur {totalStars}
      </span>
    </ul>
  );
};

export default RatingStars;