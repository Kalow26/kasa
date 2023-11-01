import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="navbar__links">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
    </nav>
  )
}

export default NavLinks