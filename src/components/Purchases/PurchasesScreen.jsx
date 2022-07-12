import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfigs'
import PurchasesCart from './PurchasesCart'
import './purchases.css'

const PurchasesScreen = () => {
  const [purchases, setPurchases] = useState()
  
  useEffect(()=>{
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
    .then(res => setPurchases(res.data.data.purchases))
    .catch(err => console.log(err))
  },[])
  return (
    <div className='Purchases FlexColumnContainer'>

      {purchases?.map(purchase => {
        return <PurchasesCart key={purchases.cartId} purchase={purchase}/>
      })}

    </div>
  )
}

export default PurchasesScreen