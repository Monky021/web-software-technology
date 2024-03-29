import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { abrirAcordeon } from '../../actions/uiActions'
import {preguntasFrecuentes} from '../../helpers/helpers'
export const Acordeon = () => {
    const dispatch = useDispatch()
    const [active, setActive] = useState(0)
    const handlerClickBx = (id) => {
        setActive(id)
        if (id === active) {
            setActive(0)
        }
    }
    useEffect(() => {
      dispatch(abrirAcordeon(active))
    }, [active])
    
  return (
    <div className='accordion'>
        {
            preguntasFrecuentes.map(preguntaF => (
                <div 
                    key={preguntaF.id} 
                    className={active === preguntaF.id ? 'contentBx active' : 'contentBx'} 
                    onClick={() => handlerClickBx(preguntaF.id)}
                >
                    
                    <div className='label'  > {preguntaF.title} </div>
                    <div className='content' >
                        <p className={preguntaF.img ? 'content__text' : ''}>
                            {preguntaF.descripcion}
                        </p>
                        {
                            preguntaF.img && (
                                <div className='box__img'>

                                    <img className='img__accordion' src={preguntaF.img } alt="imgPregunta" />
                                </div>

                            )
                        }
                    </div>
                </div>

            ))
        }
        

    </div>
  )
}
