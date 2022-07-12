import React from 'react'
import { useForm } from 'react-hook-form'
import axios from "axios"
import './login.css'
import { useState } from 'react'

const FormLogin = ({setToken}) => {

      const [errorLogin, setErrorLogin] = useState(false)
      const {handleSubmit, reset, register} = useForm()
    
      const submit = (data) => {
        const URL= 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
          .then(res => {
            localStorage.setItem('token', res.data.data.token)
            setToken(res.data.data.token)
          })
          .catch(err => {
              console.log(err)
              localStorage.setItem('token', '')
              setErrorLogin(true)
              setTimeout(() => setErrorLogin(false), 5000)
          })
        reset({
            email: '',
            password: ''
        })
      }

  return (
    <>
        <p className='title'>Please Login</p>

        <form className='login__form FlexColumnContainer' onSubmit={handleSubmit(submit)}>

            <ul className="login__list ">
            <li className="login__item FlexColumnContainer">
                
                <label htmlFor="login__email" className="login__label title">Email</label>
                
                <input type="email" className="login__input" id='login__email' {...register("email")}/>
            
            </li>

            <li className="login__item FlexColumnContainer">
                
                <label htmlFor="login__password" className="login__label title">Password</label>
                
                <input type="password" className="login__input" id='login__password' {...register("password")}/>
            
            </li>
            </ul>

            {errorLogin && <span className='title'>The email or password is incorrect. <br/>
            Please, try again</span>}

            <button className='button__primary'>Login</button>

        </form>
    </>
  )
}

export default FormLogin