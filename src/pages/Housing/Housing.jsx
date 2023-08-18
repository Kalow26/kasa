import { useParams } from "react-router-dom";
import { data } from "../../data";
import RatingStars from "../../components/RatingStars"
import Error from "../../components/ErrorPage/Error";
import Caroussel from "../../components/Caroussel";
import DropDownMenu from "../../components/DropDownMenu";
import React from "react";


const Housing = () => {
  let { id } = useParams();
  const lodge = data.find((item) => id === item.id);
  if (!lodge) {
    return <Error />;
  }

  return (
    <section className="lodge">
      {/* <Caroussel imgArr={lodge.pictures} /> */}
      <img src={lodge.pictures[0]} alt="" className="lodge-bg"/>
      <div className="lodge__content">
        <div className="lodge__content__info">
          <h2>{lodge.title}</h2>
          <h3>{lodge.location}</h3>
          <ul className="lodge__content__tags">
            {lodge.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="lodge__content__host">
          <figure>
            <figcaption>{lodge.host.name}</figcaption>
            <img src={lodge.host.picture} alt={`hôte ${lodge.host.name}`} />
          </figure>
          <RatingStars rating={lodge.rating} />
        </div>
      </div>
      <div className="lodge__desc">
        <DropDownMenu title="description" content={lodge.description} />
        <DropDownMenu title="équipements" content={lodge.equipments} />
      </div>
    </section>
  );
};

export default Housing;
