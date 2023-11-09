import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

const Caroussel = ({ imgArr }) => {
  const TranslateXValue = 100;

  const clickRight = () => {
    setCurrent(current === arrLength - 1 ? 0 : (prev) => prev + 1);
  };
  const clickLeft = () => {
    setCurrent(current === 0 ? arrLength - 1 : (prev) => prev - 1);
  };

  const arrLength = imgArr.length;
  const [current, setCurrent] = useState(0);

  return (
    <div className="caroussel">
      <div
        className="caroussel__container"
        style={{
          transform: `translateX(-${current * TranslateXValue}vw)`,
          width: `${arrLength * TranslateXValue}vw`,
        }}
      >
        {imgArr.map((img, index) => (
          <img src={img} alt="logement" key={index} />
        ))}
      </div>
      <div className="caroussel__controls">
        <button
          type="button"
          className="caroussel__controls__left"
          onClick={clickLeft}
        >
          <img src={arrowLeft} alt="bouton controle carroussel gauche" />
        </button>
        <button
          type="button"
          className="caroussel__controls__right"
          onClick={clickRight}
        >
          <img src={arrowRight} alt="bouton controle carroussel droite" />
        </button>
      </div>
      <div className="caroussel__counter">
        <p>
          {current + 1} / {arrLength}
        </p>
      </div>
    </div>
  );
};

export default Caroussel;
