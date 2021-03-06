import { Button, Grid, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useStylesPestañas } from "./StylePestañas";

export const Pestañas = () => {
  const classes = useStylesPestañas();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <ul className="pestañas">
        <li className="pestañas__item">
          <a href="/" className="item__boton">Información</a>
          <ul className="pestaña__menu-despegable">
            <li >
              <Link to='#justificación'> Justificación  </Link>
            </li>
            <li>
              <Link to='/#misión'> Misión  </Link>
            </li>
            <li>
              <Link to='/#visión'> Visión  </Link>
            </li>
            <li>
              <Link to='/#denominación'> Denominación académica  </Link>
            </li>
            <li>
              <Link to='#SNIES'> Registro SNIES  </Link>
            </li>
          </ul>
        </li>
        <li className="pestañas__item">
          <Link  to='/perfil' className="item__boton">Perfil</Link>
        </li>
        <li className="pestañas__item">
          <Link to="/plan-estudio" className="item__boton">Plan de estudios</Link>
        </li>
        <li className="pestañas__item">
          <Link to="/preguntas-frecuentes" className="item__boton">Preguntas frecuentes</Link>
        </li>
      </ul>

      {/*     
      <Grid container className={classes.boxPrincipal}>
        <Grid item className={classes.boxBotones}>

          <Button onClick={handleClick} classes={{root: classes.botonMenu}} >Información</Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Grid>
        <Grid item className={classes.boxBotones}>
          <Button onClick={handleClick} className={classes.botonMenu}>Perfil</Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Grid>
        <Grid item className={classes.boxBotones}>
          <Button onClick={handleClick} className={classes.botonMenu} >Plan de estudios</Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Grid>
        <Grid item className={classes.boxBotones}>
          <Button onClick={handleClick} className={classes.botonMenu}>Preguntas frecuentes</Button>
          
        </Grid>
      </Grid> */}
    </>
  );
};
