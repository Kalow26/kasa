import React from 'react'
import LogoKasa from '../LogoKasa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <LogoKasa logoVersion={"white"}/>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer