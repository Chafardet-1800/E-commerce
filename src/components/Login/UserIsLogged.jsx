import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserIsLogged = () => {

    const navigate = useNavigate()

    setTimeout(() => navigate('/'), 3000)

  return (
    <article className='userLoged FlexColumnContainer'>
        <i className="isLogged__icon fa-solid fa-user-check"></i>
        <span>Your user is logged</span>
    </article>
  )
}

export default UserIsLogged