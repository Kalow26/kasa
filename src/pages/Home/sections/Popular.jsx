import React, { useContext } from "react";
import { dataContext } from "../../../App";
import HousingCard from "../../../components/HousingCard";

const Popular = () => {
  const { allLodges } = useContext(dataContext);

  return (
    <section className="popular">
      <div className="container">
        <h2 className="title">
          <span>
            Découvrez
            <br />
          </span>
          Nos logements <br />
          les plus populaires
        </h2>
        {allLodges && allLodges.length > 0 ? (
          <div className="popular__grid">
            <div className="popular__item">
              <HousingCard
                title={allLodges[0].title}
                cover={allLodges[0].cover}
                id={allLodges[0].id}
                tags={allLodges[0].tags}
                price={allLodges[0].price}
              />
            </div>
            <div className="popular__item">
              <HousingCard
                title={allLodges[1].title}
                cover={allLodges[1].cover}
                id={allLodges[1].id}
                tags={allLodges[1].tags}
                price={allLodges[1].price}
              />
            </div>
            <div className="popular__item">
              <HousingCard
                title={allLodges[2].title}
                cover={allLodges[2].cover}
                id={allLodges[2].id}
                tags={allLodges[2].tags}
                price={allLodges[2].price}
              />
            </div>
            <div className="popular__item">
              <HousingCard
                title={allLodges[3].title}
                cover={allLodges[3].cover}
                id={allLodges[3].id}
                tags={allLodges[3].tags}
                price={allLodges[3].price}
              />
            </div>
          </div>
        ) : (
          "chargement en cours"
        )}
      </div>
    </section>
  );
};

export default Popular;
