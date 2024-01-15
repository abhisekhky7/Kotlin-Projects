import "./Nav.css" ;
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { logoutUser } from '../userSlice/userSlice'
import { useState } from "react";



function Nav({query,handleInputChange}) {

  const isLoggedin=useSelector(state=>state.user.isLoggedin)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleNavigation=()=>{
    isLoggedin?dispatch(logoutUser()):navigate("login")
  }
  
  return <nav>
    <div className="nav-container">
      <input 
      // onChange={(e)=>setText(e.target.value)}
       onChange={handleInputChange}
      type="text"
      className="navSearch"
      placeholder="Enter your search shoes"
      />
      <button className="search-btn">Search</button>
      
    </div>
    <div className="profile-container">
    <button className="login-btn" onClick={()=>handleNavigation()}>{isLoggedin?"Logout":"Login"}</button>
    </div>
  </nav>
}

export default Nav;
