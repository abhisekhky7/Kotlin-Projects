import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cart=[...state.cart,action.payload]
            alert("added to cart")
        },
       
        removeCart:(state,action)=>{
            state.cart=state.cart.filter((item=>item.id!==action.payload))
        }
    }
})

export const {addToCart,removeCart} = cartSlice.actions

export default cartSlice.reducer