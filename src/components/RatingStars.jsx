import emptystar from "../assets/star-empty.svg";
import fullstar from "../assets/star-full.svg";

const RatingStars = ({ rating }) => {

  const totalStars = 5;
  const StarsArray = [];

  for (let numberofRedStars = 1; numberofRedStars <= totalStars; numberofRedStars++) {
    if (numberofRedStars <= rating) {
      StarsArray.push(<li><img src={fullstar} alt="rating icon" aria-hidden="true" /></li>)
    } else {
      StarsArray.push(<li><img src={emptystar} alt="rating icon" aria-hidden="true" /></li>)
    }
  }

  return (
    <ul className="lodge__content__rating">
      {StarsArray}
      <span className="sr-only">Note de {rating} sur {totalStars}</span>
    </ul>
  )
  }

export default RatingStars;