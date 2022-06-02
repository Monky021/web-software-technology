import axios from 'axios';
const urlApi = process.env.BASEURL

export const doLogin = (correo, password) => async(dispatch) => {
    try {
        const resp = await axios.post(`${urlApi}/login`, {correo, password})

        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}