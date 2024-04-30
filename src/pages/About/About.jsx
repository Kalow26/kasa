import about from "../../../src/assets/about.jpg";
import { aboutData } from "../../aboutData";
import DropDownMenu from "../../components/DropDownMenu";

const About = () => {
  return (
    <section className="about container">
      <img src={about} alt="about" className="about__img" />
      <div className="about__items">
        {aboutData.map((item, index) => (
          <DropDownMenu
            title={item.title}
            content={item.description}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
