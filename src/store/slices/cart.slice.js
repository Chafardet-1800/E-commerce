import { createSlice } from '@reduxjs/toolkit';
import getConfig from '../../utils/getConfigs'
export const cartSlice = createSlice({
    name: 'CartSlice',
    initialState: [],
    reducers: {
        setCartSlice: (state,action) => action.payload,
    }
})

export const {setCartSlice} = cartSlice.actions;

export const getCartProducts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
        .then((res) => dispatch(setCartSlice(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}


export default cartSlice.reducer;
