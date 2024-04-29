import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoKasa from "../../assets/logo_kasa_white.svg";
import map from "../../assets/map.jpg";
import sophie from "../../assets/team-stickers/team5.svg";
import HostFigure from "../HostFigure";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__content-left">
          <div className="logo">
            <img src={LogoKasa} alt="Logo Kasa" />
            <span>séjour à Paris ville lumière</span>
          </div>

          <div className="newsletter">
            <h3>Inscrivez vous à notre NewsLetter</h3>
            <input type="email" placeholder="Votre adresse email" />
            <button>S'inscrire</button>
          </div>
        </div>

        <div className="footer__content-center">
          <div className="menu">
            <h3>Navigation</h3>
            <ul>
              <li>
                <Link href="#">Accueil</Link>
              </li>
              <li>
                <Link href="#">Logements populaires</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Logements</Link>
              </li>
              <li>
                <Link href="#">Recrutement</Link>
              </li>
              <li>
                <Link href="#">Louer votre bien</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="adress">
            <img src={map} alt="map" />
            <p>
              11 rue de la Liberté <br />
              75003 Paris
            </p>
          </div>
        </div>
        <div className="footer__content-right">
          <div className="top">
            <div className="avatar">
              <HostFigure src={sophie} alt="CEO sophie Bluel" />
              <div className="avatar-text">
                <span>CEO Kasa</span>
                <p>Sophie Bluel</p>
              </div>
            </div>
            <div className="contact">
              <button>Nous contacter</button>
              <FaFacebook />
              <FaInstagram />
            </div>
          </div>

          <div className="bottom">
            <p>
              © 2020 Kasa. All rights reserved
              <br />
              <br />
              Terms and conditions - Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
