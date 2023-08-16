import React from 'react'
import {data} from '../../data';
import HousingCard from '../../components/HousingCard';

const Home = () => {
  console.log(data)
  return (
    <>
      <section className="banner banner--home">
        <div className="banner__overlay"></div>
        <div className="banner__content">
          <h1>Chez vous,<br/> partout et ailleurs</h1>
        </div>
      </section>
      <section className="housing">
        <div className="housing__wrapper">
        {data.map ((item) => (
          <HousingCard title = {item.title} cover = {item.cover} key = {item.id}/>
        ))}
      </div>
      </section>
    </>
  );
}

export default Home