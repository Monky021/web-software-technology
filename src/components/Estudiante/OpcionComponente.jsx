import React from 'react'
import {useHistory} from 'react-router-dom'



export const OpcionComponente = ({titulo, descripcion, img}) => {

  const history = useHistory()  
  const handleClickEvaluacion = () => {
    history.push('/estudiante/evaluacion')
    console.log('Hola mundo');
  }
  return (
    <section className='componente' >
        <img 
          className='img__componente' 
          src={img} 
          alt="icono-evaluación" 
          onClick={handleClickEvaluacion}
        />
        <div className='contenedor__texto' >
          <h4 
            className='titulo__componente' 
            onClick={handleClickEvaluacion} 
          > 
            {titulo} 
          </h4>
          <hr className='line__titulo'  />
          <p className='texto__componente' > {descripcion} </p>

        </div>
    </section>
  )
}
