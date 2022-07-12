import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './cart.css'
import getConfig from '../../utils/getConfigs'
import CartOfProducst from './CartOfProducst'

const CartScreen = () => {



    const [cartProducts, setCartProducts] = useState()
    const [cartUpdate, setCartUpdate] = useState(0)
    useEffect(() => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
      axios.get(URL, getConfig())
      .then(res => setCartProducts(res.data.data.cart.products))
      .catch(err => console.log(err))
    },[cartUpdate])

    const purchase = () => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

      const obj = {
        street: "Green St. 1456",
        colony: "Southwest",
        zipCode: 12345,
        city: "USA",
        references: "Some references"
      }

      axios.post(URL, obj, getConfig())
       .then(res => console.log(res.data))
       .catch(err => console.log(err))
    }

  return (
      
    <div className='FlexColumnContainer'>

      {cartProducts?.map( cart=> {
        return <CartOfProducst cartUpdate={cartUpdate} setCartUpdate={setCartUpdate} key={cart.id} cart={cart}/>
      })}

      <button onClick={purchase} className='button__primary'>Purchase</button>

    </div>
  )
}

export default CartScreen