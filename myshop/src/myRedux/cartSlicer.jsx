import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addCart: (state, action) => {
     state.items=[...state.items,action.payload]
     state.totalPrice+=action.payload.price
     alert("item added")
    },
    removeCart: (state, action) => {
      state.items=state.items.filter((item)=>item.id!=state.items.id)
      state.totalPrice-=action.payload.price
    },
   
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
