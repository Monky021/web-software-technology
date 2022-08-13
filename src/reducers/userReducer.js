import { types } from "../types/types";


const initialState = {
    usuario: {},
    autentificado: false,
    preguntas: [],
    respuestas: [],
    usuarioResponde: false
}

export const userReducer = ( state=initialState, action ) => {

    switch (action.type) {
        case types.setUser:
            return {
                ...state,
                usuario: action.payload,
                autentificado: true
            }
        case types.setPreguntas: 
            return {
                ...state,
                preguntas: action.payload,
                respuestas: action.payload.map(pregunta => ({
                    pregunta_id: pregunta.pregunta_id,
                    respuesta: 0
                }))
            }
        case types.setRespuestas: 
            return {
                ...state,
                respuestas: state.respuestas.map(respuesta => respuesta.pregunta_id === action.payload.pregunta_id ? {pregunta_id: respuesta.pregunta_id, respuesta: action.payload.respuesta} : {...respuesta} ),
                usuarioResponde: true,
            }
        case types.negarRespuesta:
            return{
                ...state,
                usuarioResponde: false
            }
        case types.cleanRespuestas:
            return {
                ...state,
                respuestas: state.respuestas.map(res => ({pregunta_id: res.pregunta_id, respuesta: 0}))
            }
        case types.respondeEncuesta: 
            return {
                ...state,
                usuario: {
                    ...state.usuario,
                    responde_encuesta: true
                }
            }
        case types.closeSession: 
            return initialState
    
        default:
            return state;
    }


}