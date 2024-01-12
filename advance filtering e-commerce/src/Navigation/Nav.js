import "./Nav.css" ;
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai'


function Nav({query,handleInputChange}) {
  return <nav>
    <div className="nav-container">

      <input 
      onChange={handleInputChange}
      type="text"
      className="search-input"
      placeholder="Enter your search shoes"
      />
      
    </div>
    <div className="profile-container">
    <h1>Login</h1>
    </div>
  </nav>
}

export default Nav;
