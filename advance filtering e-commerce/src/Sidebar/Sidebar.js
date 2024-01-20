import "./Sidebar.css";
import { FaShoppingCart } from "react-icons/fa";
import Category from "./Category/Category.js";
import Price from "./Price/Price.js";
import Colors from "./Colors/Colors.js";
import { useNavigate } from "react-router-dom";

function Sidebar({ handleChange }) {

  const navigate= useNavigate()
  return (
    <div className="sidebar">
        <div className="logo-container">
          <h1>
            {" "}
            <FaShoppingCart  onClick={()=>navigate('cart')}/>
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
    </div>
  );
}

export default Sidebar;
