import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <header className='navbar'>
      <div className="navbar__logo">
      <Link to="/">
        <img
          src={logo}
          alt="Logo du site Kasa"
        />
      </Link>
      </div>
      <nav className="navbar__links">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Navbar