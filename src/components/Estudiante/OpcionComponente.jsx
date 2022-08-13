import React from 'react'
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'



export const OpcionComponente = ({titulo, descripcion, img, url=''}) => {

  const { responde_encuesta } = useSelector(state => state.user.usuario)

  const history = useHistory()  
  const handleClickEvaluacion = () => {
    if (url.includes('evaluacion')) {
      if (responde_encuesta) {
        return Swal.fire({
          title: 'Encuesta',
          text: 'Encuesta no disponible',
          confirmButtonColor: '#8F141B', 
          showCancelButton: false
        })
      }
    }
    history.push(url)
    
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
