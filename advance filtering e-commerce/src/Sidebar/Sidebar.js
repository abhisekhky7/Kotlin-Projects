import "./Sidebar.css";
import { FaShoppingCart } from "react-icons/fa";
import Category from "./Category/Category.js";
import Price from "./Price/Price.js";
import Colors from "./Colors/Colors.js";

function Sidebar({handleChange}) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
         <h1> <FaShoppingCart /></h1>
        </div>
          <Category handleChange={handleChange} />
          <Price  handleChange={handleChange}/>
          <Colors  handleChange={handleChange}/>
      </section>
    </>
  );
}

export default Sidebar;
