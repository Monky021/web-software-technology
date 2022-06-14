import { types } from "../types/types";


const initialState = {
    usuario: {},
    autentificado: false,
}

export const userReducer = ( state=initialState, action ) => {

    switch (action.type) {
        case types.setUser:
            return {
                ...state,
                usuario: action.payload,
                autentificado: true
            }
        
        case types.closeSession: 
            return initialState
    
        default:
            return state;
    }


}