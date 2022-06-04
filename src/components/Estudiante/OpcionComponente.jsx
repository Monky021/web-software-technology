import React from 'react'

export const OpcionComponente = ({titulo, descripcion, img}) => {
  return (
    <section className='componente' >
        <img className='img__componente' src={img} alt="icono-evaluación" />
        <div className='contenedor__texto' >
          <h4 className='titulo__componente' > {titulo} </h4>
          <hr />
          <p className='texto__componente' > {descripcion} </p>

        </div>
    </section>
  )
}
