import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        isLoggedin:false
    },
    reducers:{
        loginUser:(state)=>{state.isLoggedin=true},
        logoutUser:(state)=>
        {state.isLoggedin=false
        alert("You are Logged Out Now")
        }
    }
})

export const {loginUser,logoutUser} = userSlice.actions

export default userSlice.reducer