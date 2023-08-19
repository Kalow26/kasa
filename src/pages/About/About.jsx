import Banner from '../../components/Banner';
import DropDownMenu from "../../components/DropDownMenu";
import {aboutData} from "../../aboutData"

const About = () => {
  return (
    <section className='about'>
      <Banner name="banner--about" />
      <div className='about__items'>
       {aboutData.map ((item, index) => (
        <DropDownMenu title={item.title} content={item.description} key={index}/>
       ))}
      </div>
      
    </section>
  )
}

export default About