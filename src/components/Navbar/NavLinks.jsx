import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="navbar__links">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
    </nav>
  )
}

export default NavLinks