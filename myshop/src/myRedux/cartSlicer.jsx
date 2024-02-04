import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    price:0,
  },
  reducers: {
    addCart: (state, action) => {
     state.items=[...state.items,action.payload]
      alert("Added To Cart")
    },
    removeCart: (state, action) => {
      state.items=state.items.filter((item)=>item.id!==action.payload.id)
      console.log("removeCart")
      console.log(action.payload.id)

        
    },
    showCart:(state)=>{
        state.showCart = !state.showCart
    }
   
  },
});

export const { addCart, removeCart ,showCart} = cartSlice.actions;
export default cartSlice.reducer;
