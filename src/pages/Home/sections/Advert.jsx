import React from "react";
import advertBg from "../../../assets/advert-bg.jpg";
import olympic_rings from "../../../assets/olympic.svg";
import Button from "../../../components/Button";

const Advert = () => {
  return (
    <section className="advert container">
      <div className="bg-container">
        <img src={advertBg} alt="Paris by night" />
      </div>
      <div className="content">
        <div className="title">
          <span className="subtitle">Ville de</span>
          <h2 className="emphasis">PARIS</h2>
        </div>
        <img
          src={olympic_rings}
          alt="anneaux olympiques"
          className="olympic-rings"
        />
        <div className="olympic__res">
          <div className="olympic__res-inner">
            <p>
              Les jeux olympiques de Paris 2024 se dérouleront du 26 juillet au
              11 août 2024.
              <br />
              <span>
                Trouver votre logement dés aujourd'hui pour ne rien manquer
              </span>
            </p>
            <div className="res_btn">
              <Button text="Réservez" icon="arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advert;
