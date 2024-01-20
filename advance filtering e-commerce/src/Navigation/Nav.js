import "./Nav.css" ;
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { logoutUser } from '../Reducer/userSlice'
import { FaShoppingCart } from "react-icons/fa";




function Nav({query,handleInputChange}) {

  const isLoggedin=useSelector(state=>state.userState.isLoggedin)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleNavigation=()=>{
    isLoggedin?dispatch(logoutUser()):navigate("login")
  }
  
  return <nav>
    <div className="nav-container">
      <input 
       onChange={handleInputChange}
      type="text"
      className="navSearch"
      placeholder="Enter your search shoes"
      />
      <button className="search-btn">Search</button>
      
    </div>
    <div className="profile-container">
    <button className="login-btn" onClick={()=>handleNavigation()}>{isLoggedin?"Logout":"Login"}</button>
    <div>
      <h1 onClick={()=>navigate('cart')}> <FaShoppingCart /></h1>
    </div>

    </div>
  </nav>
}

export default Nav;
