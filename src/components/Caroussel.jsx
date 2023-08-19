import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

const Caroussel = ({ imgArr }) => {

  const clickRight = () => {
    if (current === arrLength - 1) {
      setCurrent(0)
    } else {
      setCurrent(current+1)
    }
  }
  const clickLeft = () => {
    if (current === 0) {
      setCurrent(arrLength - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const arrLength = imgArr.length;
  const [current, setCurrent] = useState(0);

  return (
    <div className="caroussel">
      <img src={imgArr[current]} alt="logement" className="caroussel__bg" />
      <div className="caroussel__controls">
        <button type="button" className="caroussel__controls__left" onClick={clickLeft}>
          <img
            src={arrowLeft}
            alt="bouton controle carroussel gauche"
            
          />
        </button>
        <button type="button" className="caroussel__controls__right" onClick={clickRight}>
          <img
            src={arrowRight}
            alt="bouton controle carroussel droite"
          />
        </button>
      </div>
      <div className="caroussel__counter">
        <p>{current+1} / {arrLength}</p>
      </div>
    </div>
  );
};

export default Caroussel;
