import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRespuestas } from '../../actions/userAction'
export const Preguntas = ({pregunta, pregunta_id}) => {
  const dispatch = useDispatch()
  
  const [active, setActive] = useState(0)
  

  const handleActiveButton = (id) => {
    setActive(id)
    dispatch(setRespuestas({respuesta: id, pregunta_id}))
  }
  return (
    <div className='box__preguntas'>
      <p className='text__pregunta'>
        {pregunta} 
      
      </p>
      <div className='box__botones'>
        <button 
          className={ 
            active === 1 
              ? 'boton__respuesta active' 
              : 'boton__respuesta'}
          onClick={()=> handleActiveButton(1)}
            >
              1
            </button>
        <button className={ 
          active === 2 
            ? 'boton__respuesta active' 
            : 'boton__respuesta'}
            onClick={()=> handleActiveButton(2)}
          >
            2
          </button>
        <button className={ 
          active === 3 
            ? 'boton__respuesta active' 
            : 'boton__respuesta'}
            onClick={()=> handleActiveButton(3)}
          >
            3
          </button>
        <button className={ 
          active === 4 
            ? 'boton__respuesta active' 
            : 'boton__respuesta'}
            onClick={()=> handleActiveButton(4)}
          >
            4
          </button>
        <button className={ 
          active === 5 
            ? 'boton__respuesta active' 
            : 'boton__respuesta'}
            onClick={()=> handleActiveButton(5)}
          >
            5
          </button>

      </div> 
    </div>
  )
}
