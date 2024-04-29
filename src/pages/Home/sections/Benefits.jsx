import React from "react";
import { FaHouse } from "react-icons/fa6";
import { IoPricetag, IoShieldCheckmark } from "react-icons/io5";
import BenefitCard from "../../../components/BenefitCard";

const Benefits = () => {
  return (
    <section className="benefits container">
      <div>
        <h2 className="benefits__title">Pourquoi choisir Kasa ?</h2>
        <div className="benefits__wrapper">
          <BenefitCard
            title="Bénéficiez d'une plus grande flexibilité"
            text="Les logements avec annulation flexible permettent d'effectuer une nouvelle réservation plus facilement, au cas où vos projets viendraient à changer."
            icon={<IoPricetag />}
          />
          <BenefitCard
            title="Plus de 7 millions d'annonces actives"
            text="Faites comme plus d'un milliard de voyageurs qui ont trouvé des escapades dans plus de 220 pays et destinations."
            icon={<FaHouse />}
          />
          <BenefitCard
            title="Plus de 100 filtres pour des séjours sur mesure"
            text="Choisissez une fourchette de prix, le nombre de chambres et certains équipements essentiels pour trouver le logement qui vous convient."
            icon={<IoShieldCheckmark />}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
