import { useForm } from "../../hooks/useForm"
import {useDispatch} from 'react-redux'
import { doLogin } from "../../actions/userAction"
export const FormLogin = () => {


  const dispatch = useDispatch()


  const [form, handleInputChange, reset] = useForm({
    correo: '',
    password: ''
  })

  const {correo, password} = form



  const onSubmitLogin = (e) => {
    e.preventDefault()

    dispatch(doLogin(correo, password))
    
  }
  console.log({correo, password});

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
        <button className="button__login"> Entrar </button>
        
      </div>
    </form>
  )
}
