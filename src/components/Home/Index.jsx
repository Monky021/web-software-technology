import React from "react";
import Button from "@mui/material/Button";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useStylesHome } from "./StyleHome";
import { Pestañas } from "../ui/Pestañas";
import { Box } from "@mui/system";
import { complemento2, grisClaro } from "../../helpers/theme";
export const Index = () => {
  const classes = useStylesHome();
  return (
    <>
      <div className="home__pestañas">
        <Pestañas />
      </div>
      <Grid container direction="column" style={{ padding: "0px 10vw" }}>
        <Grid item>
          <Box bgcolor={grisClaro} padding={0} marginBottom={5}>
            <h1 className="home__title" id='justificacion'>
              Justificación - Introducción
            </h1>
            <p className={classes.textParrafo}>
              Las Tecnologías de la Información y de la Comunicación TICs, están
              marcando un hecho sin precedentes en la historia de la humanidad.
              En el nuevo paradigma, la sociedad industrial, está dando paso al
              surgimiento de una nueva sociedad, llamada por autores tan
              importantes como Manuel Castells, la “sociedad informacional o la
              sociedad del conocimiento”.
            </p>
            <p className={classes.textParrafo}>
              La Universidad Surcolombiana aborda este fenómeno con la formación
              de talentos humanos en el campo del desarrollo de software,
              dispuestos a trabajar en forma interdisciplinaria con la nueva
              lógica que nos genera la sociedad del conocimiento y que prioriza
              los trabajos en red, la investigación científico tecnológica, el
              manejo de bases de conocimientos, y la intervención en el sistema
              productivo con una visión prospectiva, sistémica e innovadora.
            </p>
            <hr />
            <h1 className="home__title" id="mision" > Misión</h1>
            <p className={classes.textParrafo}>
              Brindar capacitación a jóvenes para realizar software de alta
              calidad y promover el uso de nuevas tecnologías, fortaleciendo el
              desarrollo de la industria a través de la investigación en
              cualquier campo de la ciencia, desarrollamos productos y
              servicios.
            </p>
            <hr />
            <h1 className="home__title" id="vision" >Visión</h1>
            <p className={classes.textParrafo}>
              Consolidarnos como capacitadores en el desarrollo de software, que
              incentive el avance tecnológico, motivante el uso de nuevas
              herramientas, con el propósito de personalizar y mejorar la
              calidad de los procesos de la industria en nuestro país.
            </p>
            <hr />
            <h1 className="home__title" id="denominacion"> Denominación académica</h1>
            <p className={classes.textParrafo}>
              El programa de Tecnología en Desarrollo de Software tiene registro
              calificado para las cuatro sedes de la Universidad Surcolombiana
              con las siguientes características:
            </p>
            <p className={classes.textParrafo}>
              <ul>
                <li> Nombre: Tecnología en Desarrollo de Software</li>
                <li>Nivel de Formación: Tecnología</li>
                <li> Metodología: Presencial</li>
                <li>Titulo a Otorgar: Tecnólogo en Desarrollo de Software</li>
                <li>Duración: 5 periodos-semestres (85 créditos )</li>
              </ul>
            </p>
            <hr />
            <h1 className="home__title" id='SNIES'>Registro SNIES</h1>
            <TableContainer component={Paper} className={classes.table}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{backgroundColor: complemento2, color: '#fff'}} align="center">Sede</TableCell>
                    <TableCell style={{backgroundColor: complemento2, color: '#fff'}} align="center">Registro SNIES</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">{"Neiva"}</TableCell>
                    <TableCell align="center">{"SNIES 90309"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">{"Garzón"}</TableCell>
                    <TableCell align="center">{"SNIES 90308"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">{"La Plata"}</TableCell>
                    <TableCell align="center">{"SNIES 90311"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">{"Pitalito"}</TableCell>
                    <TableCell align="center">{"SNIES 55156"}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
