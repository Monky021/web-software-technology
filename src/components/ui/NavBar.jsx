import React from "react";
import { Link } from "react-router-dom";

import uscoLogo from "../../assets/logos/universidad-surcolombiana-50.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LoginIcon from "@mui/icons-material/Login";
import uscoIcono from "../../assets/iconos/icono-universidad-surcolombiana-v.png";


export const NavBar = () => {
  

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={uscoLogo} alt="usco-logo" />
      </div>
      <div className="navbar__titulo">
        <Link to="/">Tecnologo en desarrollo de software</Link>
      </div>
      <div className="navbar__box">
        <nav className="navbar__navbar">
          <img src={uscoIcono} className="navbar__usco-icono" alt="usco" />
          <Link to="/" className="navbar__items navbar__items-decoration">Universidad Surcolombiana</Link>
          <LoginIcon className="navbar__icono"/>
          <Link to="/inicio-sesion" className="navbar__items navbar__items-decoration"> Ingreso </Link>
          <LocalPhoneIcon className="navbar__icono"/>
          <Link to="/contacto" className="navbar__items"> Contacto</Link>
        </nav>
      </div>
    </header>

    
  );
};
