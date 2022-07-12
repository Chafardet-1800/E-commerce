import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './cart.css'
import getConfig from '../../utils/getConfigs'

const CartOfProducst = ({cart, setCartUpdate, cartUpdate}) => {

    const [number, setnumber] = useState(1)
    const obj = {
        id: cart.id,
        newQuantity: number
    }

    const plusProduct = () => {
        setnumber(number + 1)
    }

    const restProduct = () => {
       if(number <= 1 ){
        setnumber(1)
       }else{
        setnumber(number - 1)
       }
    }

    useEffect(() => {
        axios.patch('https://ecommerce-api-react.herokuapp.com/api/v1/cart', obj, getConfig())
        .then(() => setCartUpdate(cartUpdate + 1))
        .catch(err => console.log(err.data))
    },[number])

    const deletProduct = () => {
        axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${cart.id}`, getConfig())
        .then(() => setCartUpdate(cartUpdate + 1))
        .catch(err => console.log(err))
    }
    
    
  return (
    <div className='cart FlexColumnContainer'>
        
        <main className='cart__row'>
            <p className='cart__main-text'>{cart.title}</p>
            <div className='cart__main-text main-text__quantity'><p className='main-text__quantity BorderPrimary'>{number}</p></div>
            <p className='cart__main-text'>{cart.price * cart.productsInCart.quantity}</p>
        </main>
        <div className='cart__row '>
             
            <button onClick={deletProduct} className='BorderPrimary cart__buttom'><i className="fa-solid fa-trash"></i></button>
            
            <div className='buttom__conrainer'>
                <button onClick={restProduct} className='BorderPrimary cart__buttom'>-</button>
                
                <button onClick={plusProduct} className='BorderPrimary cart__buttom'>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartOfProducst