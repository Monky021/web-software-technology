import React, { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { negarRespuesta, responderEncuesta } from '../../actions/userAction'

import { Header } from './Header'
import { Preguntas } from './Preguntas'

export const BoxEvaluacion = () => {
  
  const dispatch = useDispatch()
  const history = useHistory()
  const [contador, setContador] = useState(1)

  const {preguntas, usuarioResponde, respuestas} = useSelector(state => state.user)

  const esFinRespuesta = !respuestas.map(res => res.respuesta).includes(0)

  const token = localStorage.getItem('token')
  console.log('esFinRespuesta', esFinRespuesta );

  const handlerContadorSuma = () => {
    if (contador < preguntas.length) {
      if (usuarioResponde) {
        
        setContador(prev => prev + 1  )
        dispatch(negarRespuesta())
        console.log('esFinRespuesta', esFinRespuesta );
        
      }
    }
    if (esFinRespuesta) {
      dispatch(responderEncuesta(respuestas, history, token,  ))
    }

  }

  const handlerContadorResta = () => {
    if (contador > 1) {
      
      setContador(prev => prev - 1  )
      dispatch(negarRespuesta())

    }
  }
  return (
    <div className='box'>
        <Header titulo={'Evaluación del programa'} />
        <hr />
        {
          preguntas.map((pregunta) => ( 
            (contador === pregunta.pregunta_id) && 
              <Preguntas 
                key={pregunta.pregunta_id} 
                pregunta={pregunta.pregunta}
                pregunta_id= {pregunta.pregunta_id} 
                /> 
          ))
        }
        <div className='box__botones-respuesta'>

          <button className='boton__navigation' onClick={handlerContadorResta}> Anterior </button>
          <span> {`${contador}/${preguntas.length}`} </span>
          <button className='boton__navigation' onClick={handlerContadorSuma}> {esFinRespuesta ? 'Enviar' : 'Siguiente'} </button>

        </div>
    </div>
  )
}
