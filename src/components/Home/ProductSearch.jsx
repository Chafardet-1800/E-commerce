import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfigs'

const ProductSearch = ({setSearch, setSelector}) => {
    const [categories, setCategories] = useState()
    useEffect(() => {
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories', getConfig())
        .then(res => setCategories(res.data.data.categories))
        .catch(err => console.log(err))
    }, [])

    const changeInputText = e => {setSearch(e.target.value)}

    const changeInputSelect = e => {setType(e.target.value)}

  return (
    <form className='SearchForm FlexRowContainer'>
            <input 
                className='SearchInput'
                type="text"
                placeholder='Search for one Product'
                onChange={changeInputText}
            />

            <select onChange={changeInputSelect} className='SelectInput '>

                <option value="All Products">All Products</option>

                {categories?.map(category => {
                   return <option key={category.name} value={category.name}>{category.name}</option>
                })}
                
            </select>
    </form>
  )
}

export default ProductSearch