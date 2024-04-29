import React from "react";
import DropDownMenu from "../../../components/DropDownMenu";

const Faq = () => {
  return (
    <section className="faq">
      <div className="container faq_container">
        <div className="faq__title">
          <p className="slogan">Sentez vous chez vous.</p>
          <h2>Questions fréquemment posées</h2>
          <p>
            Chez Kasa, nous sommes plus qu'une simple agence de location, nous
            soffrons à nos clients une expérience unique ou tout est pris en
            charge. Votre satisfaction est au centre de nos préocupations.
          </p>
        </div>

        <div className="faq__questions">
          <div className="faq__question">
            <DropDownMenu
              title="En quoi consiste Kasa et comment la plateforme fonctionne-t-elle ?"
              content="Nous vérifions les profils personnels et les annonces pour rendre le partage de logement simple, agréable et sécurisé pour des millions d'hôtes et de voyageurs dans le monde entier."
            />
          </div>
          <div className="separator"></div>
          <div className="faq__question">
            <DropDownMenu
              title="Dois-je rencontrer mon hôte en personne ?"
              content="En choisissant un logement entier ou l'option d'arrivée autonome, vous minimisez vos contacts avec l'hôte. En cas de besoin, vous pouvez utiliser à tout moment le système de messagerie de l'application."
            />
          </div>
          <div className="separator"></div>
          <div className="faq__question">
            <DropDownMenu
              title="Que se passe-t-il si je dois annuler en raison d'un problème avec le logement ou l'hôte ?"
              content="En cas de problème, vous pouvez généralement trouver une solution en envoyant un message à votre hôte. Si l'hôte ne peut pas vous aider, contactez Airbnb dans les 24 heures après avoir constaté le problème."
            />
          </div>
          <div className="separator"></div>
          <div className="faq__question">
            <DropDownMenu
              title="J'ai un bien que je souhaite louer comment faire ?"
              content="Prenez contact avec un nos conseillers via le site, il se fera un plaisir de vous assiter dans vos démarche"
            />
          </div>
          <div className="separator"></div>
          <div className="faq__question">
            <DropDownMenu
              title="Je suis étranger, puis-je louer sur la plateforme ?"
              content="Bien sûr, au moment du paiment vous pourrez choisir votre devise, si vous avez la moindre question n'hésitez pas à contacter l'un de nos conseillers, ils sont tous aptes à vous répondre dans votre langue maternelle."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
