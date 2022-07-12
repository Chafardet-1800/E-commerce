import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormLogin from './FormLogin'
import './login.css'
import UserIsLogged from './UserIsLogged'

const LoginScreen = () => {

  const [token, setToken] = useState('')

  return (
    
      <div className='login__container FlexColumnContainer'>
        <div className='login FlexColumnContainer BorderPrimary'>

          <div className='login__text'>
            <p><b className='title'>Email: </b>mason@gmail.com</p>
            <p><b className='title'>Password: </b>mason1234</p>
          </div>

          {token ?

          <UserIsLogged/>

              :

          <FormLogin setToken={setToken}/>

          }

        </div>
        
      </div>
  )
}

export default LoginScreen