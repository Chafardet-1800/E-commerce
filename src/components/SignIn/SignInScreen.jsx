import React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form/dist/useForm'
import axios from "axios"
import './signin.css'

const SignInScreen = () => {

    const {handleSubmit, reset, register} = useForm()

    useEffect(() => {
        reset({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
            role: "admin"
        })
    }, [])

    const submit = (data) => {
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users', data)
        
    }

  return (
    <article className='SignIn BorderPrimary FlexRowContainer'>
        <p className='title SignIn__text'>Please complete the form to sign in</p>

        <form onSubmit={handleSubmit(submit)} className="signin__form">
            <ul className="form__list">

                <li className="form__seccion">
                    <label htmlFor="firstName">First Name</label>
                    <input className='input__form' type="text" id='firstName' {...register('firstName')}/>
                </li>
                <li className="form__seccion">
                    <label htmlFor="lastName">Last Name</label>
                    <input className='input__form' type="text" id='lastName' {...register('lastName')}/>
                </li>
                <li className="form__seccion">
                    <label htmlFor="email">Email</label>
                    <input className='input__form' type="email" id='email' {...register('email')}/>
                </li>
                <li className="form__seccion">
                    <label htmlFor="password">Password</label>
                    <input className='input__form' type="password" id='password' {...register('password')}/>
                </li>
                <li className="form__seccion">
                    <label htmlFor="phone">Phone</label>
                    <input className='input__form' type="text" id='phone' {...register('phone')}/>
                </li>

            </ul>

            <button className='button__primary'>Sign In</button>
        </form>
    </article>
  )
}

export default SignInScreen