import Advert from "./sections/Advert";
import Benefits from "./sections/Benefits";
import Faq from "./sections/Faq";
import Hero from "./sections/Hero";
import LodgeList from "./sections/LodgeList";
import Popular from "./sections/Popular";
import Recruit from "./sections/Recruit";
import Rental from "./sections/Rental";

const Home = () => {
  // const { allLodges } = useContext(dataContext);

  // const [data] = allLodges;

  return (
    <section>
      {/* <Banner name="banner--home" title="Chez vous, partout et ailleurs" /> */}
      <Hero />
      <Benefits />
      <Advert />
      <Popular />
      <Rental />
      <LodgeList />
      <Faq />
      <Recruit />
      {/* <div className="housing">
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
          </div> */}
    </section>
  );
};

export default Home;
