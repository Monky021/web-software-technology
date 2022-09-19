import React from "react";
import { Pestañas } from "../ui/Pestañas";
import { materias } from '../../helpers/helpers'
export const PlanEstudiosScreen = () => {
  return (
    <>
      <div className="home__pestañas">
        <Pestañas />
        <table className="table_plan-estudio" >
          <thead>
            <tr>
              <th>Asignatura</th>
              <th>Tipo</th>
              <th>Créditos</th>
              <th>Núcleo</th>
              <th>Semestre</th>
            </tr>

          </thead>
          <tbody>
            {
              materias.map(({id, materia, tipo, creditos, nucleo, semestre}) => (
                <tr key={id}>

                  <td> {materia} </td>
                  <td>{ tipo } </td>
                  <td> { creditos } </td>
                  <td> { nucleo } </td>
                  <td> {semestre} </td>
                </tr>

              ))
            }

          </tbody>
        </table>
      </div>
    </>
  );
};
