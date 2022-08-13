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
        localStorage.setItem('token', token)
        
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

export const responderEncuesta = (encuesta, history, token) => async(dispatch) => {

    try {
        const resp = await axios.post(`${urlApi}/encuesta/responder`,{encuesta} , {
            headers: {
                token
            }
        })
        if (resp.data.exitoso) {
            Swal.fire('Encuesta', resp.data.mensaje, 'success' ).then((result) => {
                if (result.isConfirmed) {
                    history.replace('/estudiante')
                    dispatch(updateRespondeEncuesta())
                }
            })
            
        }

    } catch (error) {
        if (error.response) {
            // La respuesta fue hecha y el servidor respondió con un código de estado
            // que esta fuera del rango de 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // La petición fue hecha pero no se recibió respuesta
            // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
            // http.ClientRequest en node.js
            console.log(error.request);
          } else {
            // Algo paso al preparar la petición que lanzo un Error
            console.log('Error', error.message);
          }
          console.log(error.config);
    }
}

const updateRespondeEncuesta = () => ({type: types.respondeEncuesta})


export const doPqr = (pqr) => async(dispatch) => {

    try {
        const token = localStorage.getItem('token')
        const resp = await axios.post(`${urlApi}/pqr/crear`, pqr, {
            headers: {
                token
            }
        } )

        console.log(resp)
        if (resp.data.msg === 'Pqr creado') {
            return Swal.fire('PQR', 'Exitoso', 'success')
        }

        
    } catch (error) {
        console.log(error);
    }
}