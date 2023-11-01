import LogoWhite from "../assets/logo-black.svg"
import LogoRed from "../assets/logo.svg"

const LogoKasa = ({ logoVersion }) => {
  return (
    <img src={logoVersion === "white" ? LogoWhite : LogoRed } alt="Logo du site Kasa" className="logo-site"/>
  )
}

export default LogoKasa