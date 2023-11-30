import { useParams, useNavigate } from "react-router-dom";
import { data } from "../../data";
import RatingStars from "../../components/RatingStars";
import Error from "../../components/ErrorPage/Error";
import Caroussel from "../../components/Caroussel";
import DropDownMenu from "../../components/DropDownMenu";
import { useEffect } from "react";
import HostFigure from "../../components/HostFigure";
import LodgeTags from "../../components/LodgeTags";


const Housing = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const lodge = data.find((item) => id === item.id);
  

  useEffect(() => {
    if (!lodge) {
      navigate("/error");
    }
  }, [lodge]);

  return (
    <>
      {lodge && (
        <section className="lodge">
          <Caroussel imgArr={lodge.pictures} />
          <div className="lodge__content">
            <div className="lodge__content__info">
              <h2>{lodge.title}</h2>
              <h3>{lodge.location}</h3>
              <LodgeTags tags={lodge.tags} />
            </div>
            <div className="lodge__content__host">
              <HostFigure
                name={lodge.host.name}
                src={lodge.host.picture}
                alt={lodge.host.name}
              />
              <RatingStars rating={lodge.rating} />
            </div>
          </div>
          <div className="lodge__desc">
            <DropDownMenu title="description" content={lodge.description} />
            <DropDownMenu title="équipements" content={lodge.equipments} />
          </div>
        </section>
      )}
    </>
  );
};

export default Housing;
