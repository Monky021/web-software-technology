import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useHistory } from "react-router-dom";

import uscoLogo from "../../assets/logos/universidad-surcolombiana-50.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import uscoIcono from "../../assets/iconos/icono-universidad-surcolombiana-v.png";
import { cerrarSesion } from "../../actions/userAction";
export const NavBar = () => {
  const dispatch = useDispatch();
  const { autentificado } = useSelector((state) => state.user);
  const history = useHistory();
  const handleSalir = () => {
    dispatch(cerrarSesion());
  };
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
          <a
            href="https://www.usco.edu.co/es/estudia-en-la-usco/programas-pregrado/facultad-de-ingenieria/tecnologia-en-desarrollo-de-software/"
            target="_blank"
            rel="noreferrer"
            className="navbar__items navbar__items-decoration"
          >
            Universidad Surcolombiana
          </a>

          {!autentificado ? (
            <>
              <LoginIcon className="navbar__icono" />
              <Link
                to="/inicio-sesion"
                className="navbar__items navbar__items-decoration"
              >
                {" "}
                Ingreso{" "}
              </Link>
            </>
          ) : (
            <>
              <ExitToAppIcon className="navbar__icono" />
              <Link
                onClick={handleSalir}
                className="navbar__items navbar__items-decoration"
              >
                {" "}
                Salir{" "}
              </Link>
            </>
          )}
          <LocalPhoneIcon className="navbar__icono" />
          <Link
            to="/contacto"
            className={`navbar__items ${
              autentificado && "navbar__items-decoration"
            }`}
          >
            {" "}
            Contacto
          </Link>

          {autentificado && (
            <>
              <PersonIcon className="navbar__icono" />
              <Link to="/estudiante" className="navbar__items">
                {" "}
                Estudiante
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
