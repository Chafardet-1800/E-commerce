import React from 'react'
import PurchasesCartMain from './PurchasesCartMain'


const PurchasesCart = ({purchase}) => {
    const products = purchase.cart.products
  return (
    <div className='purchases__cart FlexColumnContainer'>
        <header className='purchase__header'>
            <p>{purchase.createdAt}</p>
        </header>

        {products.map( product => {
            return <PurchasesCartMain product={product}/>
        })}
        
    </div>
  )
}

export default PurchasesCart