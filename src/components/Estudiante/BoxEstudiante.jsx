import React from 'react'
import {  OpcionComponente } from './OpcionComponente'
import iconoEvaluacion from '../../assets/iconos/icono-evaluacion.png'
import iconoPqr from '../../assets/iconos/icono-pqr.png'
import {useSelector} from 'react-redux'


export const BoxEstudiante = () => {

  const { nombre, apellido } = useSelector(state => state.user.usuario)

    const tituloEvaluacion = 'Evaluación del programa'
    const descripcionEvaluacion = 'En este apartado, podrás llenar una encuesta en la que calificaras si el programa de tecnologia en desarrollo de software a cumplido sus estándares a los que aspirabas al ingresar a el'

    const tituloPqr = 'Redactar petición queja o reclamo'
    const descripcionPqr = 'En este apartado, podras diligenciar una petición, queja o reclamo en caso de tener algún inconveniente'
  return (
    <div className='box__estudiante'>
        <h1 className='nombre__estudiante'> { `${nombre} ${apellido}` } </h1>
        <hr />
        <OpcionComponente 
            titulo={tituloEvaluacion} 
            descripcion={descripcionEvaluacion} 
            img={iconoEvaluacion} 
        />
        <OpcionComponente 
            titulo={tituloPqr} 
            descripcion={descripcionPqr} 
            img={iconoPqr} 
        />
        
    </div>
  )
}
