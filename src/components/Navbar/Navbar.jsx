import LogoKasa from '../LogoKasa';
import NavLinks from './NavLinks';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className='navbar'>
      <div className="navbar__logo">
        <Link to="/">
          <LogoKasa logoVersion={"red"}/>
        </Link>
      </div>
      <NavLinks />
    </header>
  )
}

export default Navbar