
export const FormLogin = () => {
  return (
    <form onSubmit={()=> {}} className='login__form'>
      <div className="box__inputs-login">

        <label className="label__input-login" htmlFor="correo">Correo electrónico</label>
        <input className="input__login" type="email" id='correo' />
      </div>

      <div className="box__inputs-login">

        <label className="label__input-login" htmlFor="password">Contraseña</label>
        <input className="input__login" type="password" id='password' />
      </div>

      <div className="box__buttons-login" >
        <button className="button__login"> Entrar </button>
        
      </div>
    </form>
  )
}
