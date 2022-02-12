import * as React from 'react';
import { makeStyles } from '@mui/styles';

import  { colorPrimario, complemento, complemento2, fontFamily, fontTamañoParrafo, fontTamañoSubTitulo2, grisClaro } from '../../helpers/theme'

export const useStylesPestañas = makeStyles({
    boxPrincipal: {
        // width: '80vw',
       
    },
    boxBotones: {
        backgroundColor: '#ebe4e4',
        marginRight: '7px !important',
    },
    botonMenu:{
        color: '#000',
        fontFamily: fontFamily,
        '&:hover': {
            backgroundColor: colorPrimario
        }
    }
});