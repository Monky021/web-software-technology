import axios from 'axios';
import Swal from 'sweetalert2'
import { types } from '../types/types';
// const urlApi = process.env.BASEURL
const urlApi = 'http://localhost:4000/api'

export const doLogin = (correo, password) => async(dispatch) => {
    try {
        const resp = await axios.post(`${urlApi}/login`, {correo, password})

        console.log(resp);
        const usuario = resp.data.estudiante
        dispatch(guardarUsuario(usuario))

        
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