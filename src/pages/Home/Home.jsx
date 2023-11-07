import {data} from '../../data';
import HousingCards from '../../components/HousingCard';
import Banner from '../../components/Banner';
// import { useEffect, useState } from 'react';


const Home = () => {

// const [data, setData] = useState();

// const FetchData = async () => {
//   const response = await fetch("/data.json")
//   const data = await response.json();
//   setData(data)
// }

// useEffect (() => {
//   FetchData()
// },[])




  return (
    <section>
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
    </section>
  );
}

export default Home