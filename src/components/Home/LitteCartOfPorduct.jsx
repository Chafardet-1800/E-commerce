import React from 'react'
import axios from 'axios'
import getConfig from '../../utils/getConfigs'

const LitteCartOfPorduct = ({product}) => {

  const productObj = {
    id: product.id,
    quantity: 1
  }
  const addProductToCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.post(URL, productObj, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
  return (
    <article className='card-product__container'>

      <header className='card-product__header'>
      <img 
           className='card-product__img-back' 
           src={product.productImgs[1]} 
           alt=""  
      />
      <img 
           className='card-product__img' 
           src={product.productImgs[0]} 
           alt=""  
      />
      </header>
      
      <div className='card-product__body'>
          <h2 className='card-product__title'>{product.title}</h2>

        <div className='card-product__price-container'>
          <h3 className='card-product__price-label'>Price</h3>
          
          <p className='card-product__price-number'>$ {product.price}</p>
        </div>
        
        <div className='card-product__btn'>
          <button onClick={addProductToCart} className='button__primary'>
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </article>
  )
}

export default LitteCartOfPorduct