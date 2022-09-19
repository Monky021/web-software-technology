import {configureStore} from '@reduxjs/toolkit'
import { uiReducer } from '../reducers/uiReducer'
import {userReducer} from '../reducers/userReducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer
  }
})

export default store