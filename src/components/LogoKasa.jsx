import LogoBlack from "../assets/logo_kasa.svg";
import LogoWhite from "../assets/logo_kasa_white.svg";

const LogoKasa = ({ logoVersion }) => {
  return (
    <img
      src={logoVersion === "white" ? LogoWhite : LogoBlack}
      alt="Logo du site Kasa"
      className="logo-site"
    />
  );
};

export default LogoKasa;
