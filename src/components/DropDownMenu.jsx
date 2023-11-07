import { useState } from "react";
import arrow from "../assets/arrow-up.svg";

const DropDownMenu = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  let typeOfContentToDisplay = "";

  // test le type de content (si string ou objet)
  const contentTest = typeof content;

  if (contentTest === "string") {
    typeOfContentToDisplay = <p>{content}</p>;
  } else {
    typeOfContentToDisplay = (
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__button" type="button" onClick={handleChange}>
        <span>{title}</span>
        <img
          src={arrow}
          alt="ouverture menu déroulant"
          className={`${
            open ? "dropdown__button__arrow--rotate" : "dropdown__button__arrow"
          }`}
        />
      </button>

      <div
        className={`dropdown__content ${
          open ? "dropdown__content--open" : "dropdown__content--close"
        }`}
      >
        {typeOfContentToDisplay}
      </div>
    </div>
  );
};

export default DropDownMenu;
