import * as React from 'react';
import { makeStyles } from '@mui/styles';


export const useStylesNavbar = makeStyles({
  navBarLogo: {
    backgroundColor: '#8F141B',
    height: 201,

  },
  enlacePrimario : {
    color: '#000',
    fontFamily: "'Open Sans', sans-serif;",
    fontSize: '1.2em',
    fontWeight: 700,
    textTransform: 'uppercase',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',

    }
  },
  enlacesSecundarios1: {
    borderRight: '1px solid #fff',
    color: '#fff',
    textDecoration: 'none',
    marginLeft: 10,
    fontFamily: "'Open Sans', sans-serif;",
    paddingRight: 10

  },
  enlacesSecundarios2: {
    borderRight: '1px solid #fff',
    color: '#fff',
    textDecoration: 'none',
    marginLeft: 10,
    fontFamily: "'Open Sans', sans-serif;",
    paddingRight: 10


  },
  enlacesSecundarios3: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: 5,
    fontFamily: "'Open Sans', sans-serif;",

  },
  iconos: {
    marginLeft: 5,
    color: '#fff'
  },
  imgUsco: {
    width: 25,
    objectFit: 'cover'
  },
  boxEnlacePrimario: {
    backgroundColor: '#dfd4a6',
    padding: 5
    
  },
  baxNabvar: {
    backgroundColor: '#4d626c'
  },
  navbar: {
    display: 'flex',
    padding: 5,
  }
});
