import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// export const loginUser = createAsyncThunk(
//     "user/login",
//     async(userCredentials)=>{
//     axios.post("https://jsonplaceholder.typicode.com/posts",userCredentials)

//     }
// )
const userSlice = createSlice({
    name:'user',
    initialState:{
        isLoggedin:false
    },
    reducers:{
        loginUser:(state) =>{
            state.isLoggedin=true

    },
    logoutUser:(state)=> state.isLoggedin=false

}
})

export const {loginUser} = userSlice.actions
export default userSlice.reducer