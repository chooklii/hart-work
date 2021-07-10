import React, { ReactFragment, ReactText, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IProps{}

interface IState{
  mobileMenu: boolean
}

const Header = (props: IProps) =>  {

  const [mobileMenu, setMobileMenu] = useState(false)

    return (
      <div className="header">
        <div className="header-content">
        <Link className="header-logo logo" to="/"></Link>

        <div className="header-links">
        <Link className="header-link button red fontBold" to="/">Startseite</Link>
        <Link className="header-link button red fontBold" to="/physiotherapie">Physiotherapie</Link>
        <Link className="header-link button red fontBold" to="/sporttherapie">Sporttherapie</Link>
        <Link className="header-link button red fontBold" to="/philosophie">Philosophie</Link>
        <Link className="header-link button red fontBold" to="/impressum">Impressum</Link>
        </div>
        </div>
      </div>
    );
  }


export default Header;