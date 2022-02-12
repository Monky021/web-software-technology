import * as React from 'react';
import { makeStyles } from '@mui/styles';

import  { colorPrimario, complemento, fontFamily, fontTamañoParrafo, fontTamañoSubTitulo2 } from '../../helpers/theme'

export const useStylesFooter = makeStyles({
    img: {
        marginTop: 0
    },
  footer: {
      backgroundColor: complemento,
      padding: '20px 5px'
  },
  textTitulo: {
      fontFamily: fontFamily,
      fontSize: fontTamañoSubTitulo2
  },
  textParrafo: {
      textAlign: 'center',
    fontFamily: fontFamily,
    fontSize: fontTamañoParrafo,
    margin: '5px 0px',
    textDecoration: 'none',
    color: '#000'

  }, 
  enlace: {

  }
});
