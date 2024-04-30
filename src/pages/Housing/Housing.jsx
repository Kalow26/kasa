import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataContext } from "../../App";
import Caroussel from "../../components/Caroussel";
import DropDownMenu from "../../components/DropDownMenu";
import HostFigure from "../../components/HostFigure";
import LodgeTags from "../../components/LodgeTags";
import RatingStars from "../../components/RatingStars";

const Housing = () => {
  const navigate = useNavigate();
  const { allLodges } = useContext(dataContext);

  let { id } = useParams();
  const lodge = allLodges.find((item) => id === item.id);

  useEffect(() => {
    if (!lodge) {
      navigate("/error");
    }
  }, [lodge, navigate]);

  return (
    <>
      {lodge && (
        <section className="lodge container">
          <Caroussel imgArr={lodge.pictures} />
          <div className="lodge__content">
            <div className="lodge__content__info">
              <h3>{lodge.title}</h3>
              <p>{lodge.location}</p>
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
