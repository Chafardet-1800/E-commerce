import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './product.css'
import {useDispatch, useSelector} from 'react-redux'
import SliderImgs from './SliderImgs';
import ProductInfoId from './ProductsInfoId';
import SimilarProducts from './SimilarProducts';

const ProductScreen = () => {
    const cartSlice = useSelector(state => state.cart)
    const [product, setProduct] = useState()
    const {id} = useParams()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
        .then(res =>setProduct(res.data.data.product))
        .catch(err => console.log(err))
    },[cartSlice])

    return (
        <div className='product'>
            <SliderImgs product={product} />
            <ProductInfoId product={product} />
            <SimilarProducts product={product} />
        </div>
)}

export default ProductScreen