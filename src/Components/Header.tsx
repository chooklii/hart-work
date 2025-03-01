import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

const Header = () => {

  const [displayStartPage, setDisplayStartPage] = useState(true)

  useEffect(() => {
    if (window.location.pathname === "/") {
      setDisplayStartPage(false)
    }
  })

  return (
    <div className="header">

      <div className="mobile headline">
        <Menu>
          
          <Link className="header-link button white fontBold" to="/">Startseite</Link>
          <Link className="header-link button white fontBold" to="/physiotherapie/">Physiotherapie</Link>
          <Link className="header-link button white fontBold" to="/sporttherapie/">Sporttherapie</Link>
          <Link className="header-link button white fontBold" to="/ems/">EMS</Link>
          <Link className="header-link button white fontBold" to="/philosophie/">Philosophie</Link>
          <Link className="header-link button white fontBold" to="/karriere/">Karriere</Link>
          <Link className="header-link button white fontBold" to="/impressum/">Impressum</Link>

          <div className="socialmedia">
            <a href="https://www.facebook.com/Hartwork-147079237493124/" target="_blank">
              <FontAwesomeIcon className="icon_social white" icon={faFacebookSquare} />
            </a>
            <a href="https://www.instagram.com/hartwork_fitseinmitdenprofis/" target="_blank">
              <FontAwesomeIcon className="icon_social white" icon={faInstagramSquare} />
            </a>
          </div>

          <h3 className="white companyName mobile fontBold floatingheading">#HART<span className="fontEx">WORK</span></h3>

        </Menu>

        <h2 className="white fontBold center">#HARTWORK</h2>
      </div>


      <div className="header-content desktop">
        <Link className="header-logo logo desktop" to="/"></Link>

        <div className="header-links">
          {displayStartPage &&
            <Link className="header-link button red fontBold" to="/">Startseite</Link>
          }
          <Link className="header-link button red fontBold" to="/physiotherapie/">Physiotherapie</Link>
          <Link className="header-link button red fontBold" to="/sporttherapie/">Sporttherapie</Link>
          <Link className="header-link button red fontBold" to="/ems/">EMS</Link>
          <Link className="header-link button red fontBold" to="/philosophie/">Philosophie</Link>
          <Link className="header-link button red fontBold joblink" to="/karriere/">Karriere</Link>
        </div>
      </div>
    </div>
  );
}


export default Header;