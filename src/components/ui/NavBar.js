import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import uscoLogo from '../../assets/logos/universidad-surcolombiana-50.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LoginIcon from '@mui/icons-material/Login';
import uscoIcono from '../../assets/iconos/icono-universidad-surcolombiana-v.png'
import { useStylesNavbar } from './StyleNavbar'


export const NavBar = () => {
  const classes = useStylesNavbar()
  return (
    <>
      <Grid container justifyContent='center' alignItems='center' className={classes.navBarLogo}>
        <Grid item>
          <img src={uscoLogo} alt="" />
        </Grid>

      </Grid>
      <Grid container justifyContent='center' className={classes.boxEnlacePrimario} >
        <Grid item>
          <Link to='/' className={classes.enlacePrimario}>
            Tecnologo en desarrollo de software
          </Link>
        </Grid>
      </Grid>
      <Grid container justifyContent='center' className={classes.baxNabvar}>
        <Grid item>
          <nav className={classes.navbar}>
            <img src={uscoIcono} alt="usco" className={classes.imgUsco}/>
            <Link to="/" className={classes.enlacesSecundarios1} >Universidad Surcolombiana</Link>
            <LoginIcon className={classes.iconos} />
            <Link to="/info" className={classes.enlacesSecundarios2}> Ingreso </Link>

            <LocalPhoneIcon className={classes.iconos}/>
            <Link to="/contacto" className={classes.enlacesSecundarios3}> Contacto</Link>
            

          </nav>

        </Grid>
      </Grid>
    </>
  )
}
