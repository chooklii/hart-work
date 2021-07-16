import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface IProps{}

interface IState{
  mobileMenu: boolean
}

const Header = (props: IProps) =>  {

  const [mobileMenu, setMobileMenu] = useState(false)

  const [displayStartPage, setDisplayStartPage] = useState(true)

  useEffect(() => {
    if(window.location.pathname === "/"){
      setDisplayStartPage(false)
    }
  })

    return (
      <div className="header">
        <div className="header-content">
        <Link className="header-logo logo" to="/"></Link>

        <div className="header-links">
        {displayStartPage && 
          <Link className="header-link button red fontBold" to="/">Startseite</Link>
        }
        <Link className="header-link button red fontBold" to="/physiotherapie">Physiotherapie</Link>
        <Link className="header-link button red fontBold" to="/sporttherapie">Sporttherapie</Link>
        <Link className="header-link button red fontBold" to="/philosophie">Philosophie</Link>
        </div>
        </div>
      </div>
    );
  }


export default Header;