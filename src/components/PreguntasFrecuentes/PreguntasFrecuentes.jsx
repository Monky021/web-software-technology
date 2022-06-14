import React from 'react'
import { Pestañas } from '../ui/Pestañas'
import { Acordeon } from './Acordeon'

export const PreguntasFrecuentes = () => {
    return (
        <>
            <div className="home__pestañas">
                <Pestañas />
            </div>
            <div className='perfil-container' >
                <Acordeon />
            </div>
        </>
    )
}
