import React from 'react'
import { types } from '../types/types';

const initialState = {
    acordeonOpen: false
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.acordeonOpen:
            return {
                ...state,
                acordeonOpen: action.payload
            }
        default:
            return state;
    }

}