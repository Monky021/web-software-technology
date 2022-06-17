import axios from 'axios';
import Swal from 'sweetalert2'
import { types } from '../types/types';
// const urlApi = process.env.BASEURL
const urlApi = 'http://localhost:4000/api'

export const doLogin = (correo, password) => async(dispatch) => {
    try {
        const resp = await axios.post(`${urlApi}/login`, {correo, password})

        
        const usuario = resp.data.estudiante
        const token = resp.data.token
        dispatch(guardarUsuario(usuario))
        dispatch(listarPreguntas(token))
        
    } catch (error) {
        console.log(error);
        console.log(error.response.status);

        if(error.response.status >= 400 && error.response.status < 500 ){
            console.log('estoy 404', error.response.data.mensaje);
            Swal.fire({
                title: 'Algo salio mal :(',
                icon: 'error',
                text: error.response.data.mensaje
            })

        }else {
             Swal.fire({
                title: 'Lo sentimos!',
                icon: 'error',
                text: error.message
            })

        }
    }
}

const guardarUsuario = (usuario) => ({ type: types.setUser, payload: usuario})

export const cerrarSesion = () => ({type: types.closeSession}) 


const listarPreguntas = (token) => async(dispatch) => {
    try {
        const resp = await axios.get(`${urlApi}/encuesta/listar`, {
            headers: {
                token
            }
        })
        const preguntas = resp.data.data
        dispatch(setPReguntas(preguntas))

    } catch (error) {
        console.log(error)
    }
}

const setPReguntas = (preguntas) => ({type: types.setPreguntas, payload: preguntas})


export const setRespuestas = (respuestas) => ({type: types.setRespuestas , payload: respuestas})

export const negarRespuesta = () => ({type: types.negarRespuesta})
export const cleanRespuestas = () => ({type: types.cleanRespuestas})