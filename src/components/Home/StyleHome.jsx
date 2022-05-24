import * as React from "react";
import { makeStyles } from "@mui/styles";

import {
  colorPrimario,
  complemento,
  complemento2,
  fontFamily,
  fontTamañoParrafo,
  fontTamañoSubTitulo2,
  fontTamañoTitulo,
  grisClaro,
} from "../../helpers/theme";

export const useStylesHome = makeStyles({
  boxPrincipal: {
    width: "80vw",
    backgroundColor: grisClaro,
  },
  table:{
    width: 500
  },
  textTituloHome: {
    fontFamily: fontFamily,
    fontSize: fontTamañoTitulo,
    fontWeight: "500",
  },
  textParrafo: {
    fontFamily: fontFamily,
    fontSize: fontTamañoParrafo
  },
});
