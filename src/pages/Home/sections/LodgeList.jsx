import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../../../App";

const LodgeList = () => {
  const { allLodges } = useContext(dataContext);

  const [activebtn, setActivebtn] = useState(0);
  const [filteredLodges, setFilteredLodges] = useState([]);

  const handleClick = (text, id) => {
    setActivebtn(id);
    setFilteredLodges(
      allLodges.filter((lodge) => lodge.type === text.toLowerCase())
    );
  };

  useEffect(() => {
    if (allLodges) {
      setFilteredLodges(
        allLodges.filter((lodge) => lodge.type === "appartement")
      );
    }
  }, [allLodges]);

  const buttons = [
    {
      id: 0,
      text: "Appartement",
    },
    {
      id: 1,
      text: "Studio",
    },
    {
      id: 2,
      text: "Maison",
    },
  ];

  return (
    <section className="lodgelist container">
      <h2 className="title">Trouver aujourd'hui votre logement</h2>

      <div className="filter_btn-container">
        <div className="inner">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              className={
                activebtn === btn.id
                  ? "filter-btn filter-btn--active"
                  : "filter-btn"
              }
              onClick={() => handleClick(btn.text, btn.id)}
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>

      <div className="lodgelist_grid">
        {filteredLodges &&
          filteredLodges.length > 0 &&
          filteredLodges.map((lodge) => (
            <Link
              to={`/housing/${lodge.id}`}
              className="lodgelist_item"
              key={lodge.id}
            >
              <div className="lodgelist_item_img">
                <div className="overlay"></div>
                <img src={lodge.cover} alt={lodge.title} />
              </div>
              <div className="lodgelist_item_details">
                <div className="lodgelist_item_details_price">
                  <h4>{lodge.title}</h4>
                  <p>{lodge.price} € / nuit</p>
                </div>
                <p className="desc">{lodge.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default LodgeList;
