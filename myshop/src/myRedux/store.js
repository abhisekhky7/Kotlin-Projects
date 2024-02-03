import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlicer';

 const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})   

export default store;