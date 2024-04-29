import { Link } from "react-router-dom";
import LogoKasa from "../LogoKasa";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <LogoKasa logoVersion={"black"} />
        </Link>
      </div>
      <NavLinks />
    </header>
  );
};

export default Navbar;
