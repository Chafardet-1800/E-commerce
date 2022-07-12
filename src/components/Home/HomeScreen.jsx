import React, { useState } from 'react'
import './home.css'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProductsGlobal } from '../../store/slices/products.slice'
import LitteCartOfPorduct from './LitteCartOfPorduct'
import ProductSearch from './ProductSearch'

const HomeScreen = () => {

  const dispatch = useDispatch()
  const [search, setSearch] = useState()
  const [filter, setFilter] = useState()
  const [selector, setSelector] = useState()
  const products = useSelector(state => state.products)
  const cart = useSelector(state => state.cart)
  
  useEffect(() => {
    dispatch(getProductsGlobal())
  }, [])

  useEffect(() => {
      if(search){
        setFilter(products.filter(e => e.title.toLowerCase().includes(search.toLowerCase())))
      }
  },[search])

  

  return (
    <main className="Main">

        <div className='FlexRowContainer'>
            <ProductSearch setSearch={setSearch} setSelector={setSelector}/>
        </div>

        {search ?

        <div className="Products-container FlexRowContainer">
          {filter.map(product => {
            console.log(product.title)
            return <LitteCartOfPorduct
                      product={product}
                    />
         })}
        </div>
        :
        <div className="Products-container FlexRowContainer">
            {products.map(product => {
              return <LitteCartOfPorduct
                      
                        product={product}
                      />
             })}
        </div>}

    </main>
    )
  }
  
  export default HomeScreen
  // <footer class="Footer">
  //     <p>Hecho con dediacion de un estudiante que necesita dormir <br> Todos Los Derechos Reservados</p>
  // </footer>