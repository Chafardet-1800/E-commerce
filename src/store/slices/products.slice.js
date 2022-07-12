import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProductsGlobal: (state, action) => action.payload,


    }
})

export const { setProductsGlobal } = productsSlice.actions;

export const getProductsGlobal = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
        .then((res) => dispatch(setProductsGlobal(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export default productsSlice.reducer;
