import { useState } from "react";
import arrow from "../assets/arrow-down.svg";


const DropDownMenu = (props) => {
  const {title, content} = props
  const [open, setOpen] = useState(false);
  
  // test le type de content (si string ou objet)
  const contentTest = typeof (content);

  const handleChange = () => {
    setOpen(!open)
  }

  return (
    <div className="dropdown">
      <button
        className="dropdown__button"
        type="button"
        onClick={handleChange}
      >
        <span>{title}</span>
        <img
          src={arrow}
          alt="ouverture menu déroulant"
          className={`${open ? 'dropdown__button__arrow--rotate' : 'dropdown__button__arrow'}`}
        />
      </button>
      
      {open && (
        <div className={`${open ? 'dropdown__content' : ''}`}>
          {contentTest === "string" ?
            <p>{content}</p>
            :
            <ul>
               {content.map((item, index) => (
                <li key={index}>{item}</li>
               ))}
            </ul>
        
        }
        </div>
      )}
        </div>
    
  );
}

export default DropDownMenu