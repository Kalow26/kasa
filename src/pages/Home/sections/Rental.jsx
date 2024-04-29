import React from "react";
import rentalbg from "../../../assets/pairs-rental.jpg";
import team1 from "../../../assets/team-stickers/team1.svg";
import team2 from "../../../assets/team-stickers/team2.svg";
import team3 from "../../../assets/team-stickers/team3.svg";
import team4 from "../../../assets/team-stickers/team4.svg";
import team5 from "../../../assets/team-stickers/team5.svg";
import Button from "../../../components/Button";
import HostFigure from "../../../components/HostFigure";
import PopularCursors from "../../../components/PopularCursors";

const Rental = () => {
  return (
    <div className="rental container">
      <div className="wrapper">
        <div className="title">
          <h2>Vous avez un bien à louer ?</h2>
          <h3>Nous avons un réseau.</h3>
          <p>
            Chez Kasa, nous sommes plus qu'une simple agence de location, nous
            proposons à nos clients une offre clef en main, avec un
            accompagnement personnalisé pour vous offrir une expérience à la
            hauteur de vos besoins.
          </p>
        </div>

        <div className="team">
          <HostFigure src={team1} alt="Arnaud" />
          <HostFigure src={team2} alt="Louisia" />
          <HostFigure src={team3} alt="Pedro" />
          <HostFigure src={team4} alt="Margot" />
          <HostFigure src={team5} alt="Sophie" />

          <div className="team_text">
            <p>
              Rencontrez notre équipe <br /> de professionnels
            </p>
          </div>
        </div>

        <div className="dynamic_cursors">
          <PopularCursors
            number="28+"
            text="Nouveaux biens sur la plateforme chaque mois"
          />
          <div className="separator"></div>
          <PopularCursors
            number="97%"
            text="Clients satisfaits sur TrustPilot"
          />
          <div className="separator"></div>
          <PopularCursors
            number="120K"
            text="Particuliers nous ont déjà fait confiance"
          />
        </div>
      </div>

      <div className="img_container">
        <img src={rentalbg} alt="Rental" />
        <div className="contact-top">
          <Button text="Nous Contacter" color="white" icon="phone" />
        </div>
        <div className="contact-bottom">
          <p>Kasa. Construisons vos rêves</p>
          <button className="contact-bottom--btn">
            <img src={team5} alt="Sophie" />
            <div className="btn-text">
              <span>Offre spéciale</span>
              <p>Obtenez un entretien avec notre experte location client</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rental;
