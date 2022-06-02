import { types } from "../types/types";


const initialState = {
    usuario: {}
}

export const userReducer = ( state=initialState, action ) => {

    switch (action.type) {
        case types.setUser:
            return {
                ...state,
                usuario: action.payload
            }
        
        
    
        default:
            return state;
    }


}