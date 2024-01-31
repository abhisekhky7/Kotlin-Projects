import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slicer/UserSlice'
import movieReducer from '../Slicer/MovieSlice'


 const store = configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
    },
   
})

export default store;