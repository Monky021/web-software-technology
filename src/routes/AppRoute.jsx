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

export const AppRoute = () => {
    return (
        <Router>
        <div>
         
          <NavBar />
         
          <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/info" exact component={Informacion} />
              
            
          </Switch>
        </div>
        <Footer />
      </Router>
    )
}



