import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doPqr } from '../../actions/userAction'
import { useForm } from '../../hooks/useForm'
import { Header } from '../evaluacion/Header'

export const PqrScreen = () => {

    const dispatch = useDispatch()
    
    const [ form, handleInputChange, reset ] = useForm({
        tipoSolicitud: 1,
        sede: 1,
        email: '',
        asunto: '',
        detalle: '',
    })
    const {tipoSolicitud, sede, email, asunto, detalle} =form

    const handleSubmitForm = (e) => {
        
        
        e.preventDefault()

        console.log(form);
        dispatch(doPqr({...form,  correo: form.email, sede_id: form.sede, tipo_solicitud_id: form.tipoSolicitud } ))
        reset()
    }
  return (
    <div className='content-box' >
        <div className='box' >
            <Header titulo={'PQR'}/>
            <hr />

            <form className='form__pqr' onSubmit={handleSubmitForm} >
                <div className='form-first' >
                    <div className='box__label-input' >
                        <label className='label__input' htmlFor="tipoSolicitud"> Tipo de solicitud </label>
                        <select className='input__login select' type="text" id='tipoSolicitud' onChange={handleInputChange} value={tipoSolicitud} name='tipoSolicitud' >
                            <option value={1}> Petición </option>
                            <option value={2}> Queja </option>
                            <option value={3}> Reclamo </option>

                        </select>

                    </div>
                    <div className='box__label-input' >
                        <label className='label__input' htmlFor="sede"> Sede </label>
                        <select className='input__login select' type="text" id='sede' onChange={handleInputChange} value={sede} name='sede' >
                            <option value={1}> Neiva </option>
                            <option value={2}> Garzón </option>
                            <option value={3}> Pitalito </option>
                            <option value={4}> La Plata </option>


                        </select>

                    </div>
                    <div className='box__label-input'>
                        <label className='label__input' htmlFor="email">Correo electrónico</label>
                        <input className='input__login'  type="email" id='email'  onChange={handleInputChange} value={email} name='email' />

                    </div>

                </div>
                <div className='form-second' >
                    <div className='box__label-input' >
                        <label className='label__input' htmlFor="asunto">Asunto</label>
                        <input className='input__login' type="text" id='asunto' onChange={handleInputChange} value={asunto} name='asunto' />

                    </div>
                </div>
                <div className='form-three' >
                    <div className='box__label-input'>
                        <label className='label__input' htmlFor="detalle">Detalle de la solicitud</label>
                        <textarea className='input__login' name="detalle" id="detalle" cols="30" rows="10" onChange={handleInputChange} value={detalle}  >

                        </textarea>
                    </div>
                </div>
                <div className='box__button' >
                    <button className='button__login' type='submit' > Enviar  </button>

                </div>
            </form>
        </div>
    </div>
  )
}
