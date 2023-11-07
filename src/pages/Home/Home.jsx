import HousingCards from "../../components/HousingCards";
import Banner from "../../components/Banner";
import { useContext } from "react";
import { dataContext } from "../../App";


const Home = () => {

  const { allLodges } = useContext(dataContext)

  const [data] = allLodges

  
  return (
    <section>
      {data ? (
        <>
          <Banner name="banner--home" title="Chez vous, partout et ailleurs" />
          <div className="housing">
            <div className="housing__wrapper">
              {data.map((item, index) => (
                <HousingCards
                  id={item.id}
                  title={item.title}
                  cover={item.cover}
                  key={item.id}
                  index={index}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        "chargement en cours"
      )}
    </section>
  );
};

export default Home;
