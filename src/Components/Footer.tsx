import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";


const Footer = () =>  {

    return (
      <div className="footer desktop">
        <div className="footer-content">
        <h3 className="red fontBold floatingheading">#HART<span className="fontEx">WORK</span></h3>
        <div className="socialmedia">
        <a href="https://www.facebook.com/Hartwork-147079237493124/" className="nosocial" target="_blank">
        <FontAwesomeIcon className="icon_social grey" icon={faFacebookSquare}/>
        </a>
        <a href="https://www.instagram.com/hartwork_fitseinmitdenprofis/" className="nosocial" target="_blank">
        <FontAwesomeIcon className="icon_social grey" icon={faInstagramSquare}/>
        </a>
        </div>
        <div className="footer-links">
        <Link className="footer-link button red fontBold" to="/impressum">Impressum</Link>
        </div>
        </div>
      </div>
    );
  }


export default Footer;