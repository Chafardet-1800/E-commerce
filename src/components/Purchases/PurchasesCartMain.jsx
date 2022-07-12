import React from 'react'

const PurchasesCartMain = ({product}) => {
    
  return (
        <main className='purchase__row'>
            <p className='purchase__main-text'>{product.title}</p>
            <div className='purchase__main-text main-text__quantity'><p className='main-text__quantity BorderPrimary'>{product.productsInCart.quantity}</p></div>
            <p className='purchase__main-text'>{product.price * product.productsInCart.quantity}</p>
        </main>
  )
}

export default PurchasesCartMain