import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='navbar'>
      <div className="navbar__logo">
        <img src="/assets/LOGO.svg" alt="Logo du site Kasa" />
      </div>
      <div className="navbar__links">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </header>
  )
}

export default Navbar