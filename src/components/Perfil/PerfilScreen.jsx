import React from "react";
import { Pestañas } from "../ui/Pestañas";
import { TextPerfil } from "./TextPerfil";
export const PerfilScreen = () => {
  return (
    <>
      <div className="home__pestañas">
        <Pestañas />
      </div>
      <div className="perfil-container">
        <TextPerfil/>
      </div>
    </>
  );
};
