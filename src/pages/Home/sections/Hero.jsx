import { BsDownload } from "react-icons/bs";
import paris from "../../../assets/paris2.jpg";
import Button from "../../../components/Button";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__left">
        <div className="title">
          <p>Un séjour de rêve</p>
          <h1>
            <span>Découvrez l'âme de Paris:</span> <br /> Commencez votre voyage
            ici
          </h1>
          <p className="headline">
            Découvrez des logements entiers et des chambres pour tout type de
            voyage.
          </p>
        </div>

        <div className="button_container">
          <Button text="Nous Contacter" color="black" icon="phone" />
          <Button text="Explorer les logements" color="white" icon="arrow" />
        </div>
      </div>
      <div className="hero__right">
        <img src={paris} alt="Paris effeil tower" />
        <div className="overlay">
          <p>Plus de 300 logements sur Paris et alentour</p>
          <p>
            <span>à partir de 39€/nuit seulement</span>
          </p>
        </div>
        <button className="btn_cat">
          <span>
            Télécharger
            <br /> notre brochure
          </span>
          <BsDownload />
        </button>
      </div>
    </section>
  );
};

export default Hero;
