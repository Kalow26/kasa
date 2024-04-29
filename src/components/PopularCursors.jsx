import React from "react";

const PopularCursors = ({ number, text }) => {
  return (
    <div className="popular_cursor">
      <h2 className="popular_cursor-number">{number}</h2>

      <p>{text}</p>
    </div>
  );
};

export default PopularCursors;
