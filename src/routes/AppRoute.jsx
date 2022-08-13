import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Informacion } from "../components/Informacion/Informacion";
import { Index } from "../components/Home/Index";
import { NavBar } from "../components/ui/NavBar";
import { Footer } from "../components/ui/Footer";
import { PerfilScreen } from "../components/Perfil/PerfilScreen";
import { LoginScreen } from "../components/Login/LoginScreen";
import { EstudianteScreen } from "../components/Estudiante/EstudianteScreen";
import { PrivateRoute } from "./PrivateRoute";
import { useSelector } from "react-redux";
import { PreguntasFrecuentes } from "../components/PreguntasFrecuentes/PreguntasFrecuentes";
import { EvaluacionScreen } from "../components/evaluacion/EvaluacionScreen";
import { PqrScreen } from "../components/pqr/PqrScreen";

export const AppRoute = () => {

  const autentificado = useSelector(state => state.user.autentificado)
    return (
        <Router>
        <div>
         
          <NavBar />
         
          <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/info" exact component={Informacion} />
            <Route path='/inicio-sesion' exact component={LoginScreen}  />
            <Route path="/perfil" exact component={PerfilScreen} />
            <Route path="/preguntas-frecuentes" exact component={PreguntasFrecuentes} />
            


            <PrivateRoute isAuthenticated={autentificado} path="/estudiante" exact component={EstudianteScreen} />
            <PrivateRoute isAuthenticated={autentificado} path="/estudiante/evaluacion" exact component={EvaluacionScreen} />
            <PrivateRoute isAuthenticated={autentificado} path="/estudiante/pqr" exact component={PqrScreen} />



              
            
          </Switch>
        </div>
        <Footer />
      </Router>
    )
}



