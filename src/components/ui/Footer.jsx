import React from "react";
import Grid from "@mui/material/Grid";
import logoUsco from "../../assets/logos/logo-universidad-surcolombiana.png";
import { useStylesFooter } from "./StyleFooter";
import { useSelector } from "react-redux";
export const Footer = () => {

  const classes = useStylesFooter();

  const acordeon = useSelector(state=> state.ui.acordeonOpen)

  return (
    <footer className={classes.footer} style={acordeon ? {marginTop: 200} : {}}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <img className={classes.img}  src={logoUsco}  alt="logo usco" />
        </Grid>
      </Grid>

      <Grid container justifyContent="space-around">
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <h3 className={classes.textTitulo}>Oficina del programa</h3>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center" style={{borderRight: '1px solid', borderLeft: '1px solid', padding: '0px 40px'}}>
            <Grid item>
              <h3 className={classes.textTitulo}>
                Vigilada por el ministerio de educación nacional
              </h3>
            </Grid>
            <Grid item>
              <p className={classes.textParrafo}>NIT: 891180084-2</p>
            </Grid>
            <Grid item>
              <p className={classes.textParrafo}>
                Horario de atención al publico:
              </p>
              <p className={classes.textParrafo}>
                Lunes a viernes de 8:00 AM a 12:00 M. y de 2:00 PM a 6:00 PM
              </p>
            </Grid>
            <Grid item>
              <p className={classes.textParrafo}>
                Línea gratuita nacional: 018000958722
              </p>
            </Grid>
            <Grid item>
              <a
                href="https://www.usco.edu.co/es/atencion-al-ciudadano/notificaciones-judiciales/"
                className={classes.textParrafo}
              >
                Notificaciones judiciales: notificacionesjudiciales@usco.edu.co
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <h3 className={classes.textTitulo}>Subsede central</h3>
            </Grid>
            <Grid item>
              <p className={classes.textParrafo}>Avenida Pastrana Borrero - Carrera 1</p>
            </Grid>
            <Grid item>
              <p className={classes.textParrafo}>PBX: (57) (8) 8754753</p>
            </Grid>
            <Grid item>
              <p className={classes.textParrafo}>contactenos@usco.edo.co</p>
            </Grid>
            <Grid item>
              <p className={classes.textParrafo}>Neiva, Huila, Colombia</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};
