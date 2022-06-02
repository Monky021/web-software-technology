import { useForm } from "../../hooks/useForm"
import {useDispatch, useSelector} from 'react-redux'
import { doLogin } from "../../actions/userAction"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"
export const FormLogin = () => {


  const dispatch = useDispatch()
  const history = useHistory()
  const autentificado = useSelector(state => state.user.autentificado)
  const [form, handleInputChange, reset] = useForm({
    correo: '',
    password: ''
  })

  const {correo, password} = form



  const onSubmitLogin = (e) => {
    e.preventDefault()

    dispatch(doLogin(correo, password))
    
  }
  
  useEffect(() => {
    if(autentificado){
      history.replace('/estudiante')
    }
  }, [autentificado, history])
  
  
  return (
    <form onSubmit={onSubmitLogin} className='login__form'>
      <div className="box__inputs-login">

        <label className="label__input-login" htmlFor="correo">Correo electrónico</label>
        <input className="input__login" type="email" id='correo' onChange={handleInputChange} name="correo" value={correo} />
      </div>

      <div className="box__inputs-login">

        <label className="label__input-login" htmlFor="password">Contraseña</label>
        <input className="input__login" type="password" id='password' onChange={handleInputChange} name='password' value={password} />
      </div>

      <div className="box__buttons-login" >
        <button className="button__login" type="submit"> Entrar </button>
        
      </div>
    </form>
  )
}
