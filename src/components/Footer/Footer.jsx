import React from 'react'
import logoblack from "../../assets/logo-black.svg"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <img src={logoblack} alt="logo du site Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer