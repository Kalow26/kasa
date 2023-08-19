import {data} from '../../data';
import HousingCard from '../../components/HousingCard';
import Banner from '../../components/Banner';

const Home = () => {
  return (
    <section>
      <Banner name="banner--home" title="Chez vous, partout et ailleurs" />
      <div className="housing">
        <div className="housing__wrapper">
          {data.map((item, index) => (
            <HousingCard
              id={item.id}
              title={item.title}
              cover={item.cover}
              key={item.id}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home