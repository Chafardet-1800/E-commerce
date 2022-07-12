import React from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './headerScreen.css'

const HeaderScreen = () => {

    const navbar = useRef()

    const clickMenu = () => {
        navbar.current.classList.toggle('navbar-open')
    }

    return (
        <header className='header'>
            
            <NavLink to='/'>
                <h1 className='header__title'>E-commerce</h1>
            </NavLink>

            <div onClick={clickMenu} className='header__menu'>
                <i className="fa-solid fa-bars"></i>
            </div>

            <nav ref={navbar} className="navbar FlexColumnContainer">
                <ul className='navbar__list'>

                    <li className="navbar__items">
                        <NavLink className={({isActive}) => isActive ? 'navbar__links navbar__link-active' : 'navbar__links' } to='/login'>
                            <i className="fa-solid fa-user"></i>
                            <p className='navbar__label'>Login</p>
                        </NavLink>
                    </li>
                    <li className="navbar__items">
                        <NavLink className={({isActive}) => isActive ? 'navbar__links navbar__link-active' : 'navbar__links' } to='/purchases'>
                            <i className="fa-solid fa-store"></i>
                            <p className='navbar__label'>Purchases</p>
                        </NavLink>
                    </li>
                    <li className="navbar__items">
                        <NavLink className={({isActive}) => isActive ? 'navbar__links navbar__link-active' : 'navbar__links' } to='/cart'>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p className='navbar__label'>Cart</p>
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default HeaderScreen