import React, { useEffect,useState} from "react";
import Card from "./Card";
import './Category.css'

const Category = () => {

  const [category,setCategory] = useState("")
  const callme =(d)=> setCategory(d)


  return (
    <div className=" container-fluid outerCat" >
      <div className="d-flex justify-content-center cat" >
        <ul className="list-group list-group-horizontal m-2 " >
        <li className="list-group-item" onClick={()=>callme("")}>All</li>
        <li className="list-group-item" onClick={()=>callme("category/electronics")}>Electronics</li>
        <li className="list-group-item " onClick={()=>callme("category/jewelery")}>Jewelery</li>
        <li className="list-group-item" onClick={()=>callme("category/men's clothing")}>Men's Cloth </li>
        <li className="list-group-item" onClick={()=>callme("category/women's clothing")}>Women's Cloth</li>
      </ul>
      </div>
      <div className="container-fluid mt-4 border">
        <Card category={category}/>
      </div>
        
    </div>
  );
};

export default Category;
