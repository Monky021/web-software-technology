import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Informacion } from "../components/Informacion/Informacion";
import { Index } from "../components/Index";
import { NavBar } from "../components/ui/NavBar";
import { LoginScreen } from "../components/Login/LoginScreen";

export const AppRoute = () => {
    return (
        <Router>
        <div>
         
          <NavBar />
         
          <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/info" exact component={Informacion} />
            <Route path='/inicio-sesion' exact component={LoginScreen}  />
            
          </Switch>
        </div>
      </Router>
    )
}



