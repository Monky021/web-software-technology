import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import{useHistory} from 'react-router-dom'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
export const Header = ({titulo}) => {
  const dispatch = useDispatch()
  const history = useHistory()
    const {nombre, apellido} = useSelector(state => state.user.usuario)

    const handleClickBack = () => {
      history.push('/estudiante')
      dispatch(handleClickBack())
    }
  return (
    <header className='header__box'>
        <h1 className='nombre__estudiante'> {`${nombre} ${apellido}`} </h1>
        <div className='header__derecha'>
            <h1 className='nombre__estudiante' > {titulo} </h1>
            <button className='boton__back' onClick={handleClickBack} >
              <ArrowCircleLeftOutlinedIcon fontSize='large' />

            </button>
        </div>
    </header>
  )
}
