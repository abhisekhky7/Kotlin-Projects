import React from "react";
import { useEffect, useState } from "react";
import './Card.css'
import { useDispatch } from "react-redux";
import { addCart } from "../myRedux/cartSlicer";

const Card = ({category}) => {
  const dispatch= useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);

 
  useEffect(() => {
    const getData = async (c) => {
      setLoading(true)
      const res = await fetch(`https://fakestoreapi.com/products/${c}`);
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    getData(category);
  }, [category]);


  const handleAdd = (itemObj)=>{
    dispatch(addCart(itemObj))
  }

  return (
    <div className="d-flex justify-content-center  ">
      {loading ? (
        <div className="spinner-border text-danger "/>
      ) : (
        <div className=" d-flex flex-wrap" style={{width:"100%"}} >
          {data.map((item) => (
            <div className="card p-2 m-2"  key={item.id}>
            <img src={item.image} alt={item.title} style={{ maxHeight: "150px", width: "auto", objectFit: "contain" }} />
            <div className="card-body">
              <h6 className="card-title">{item.title}</h6>
           <div className="d-flex justify-content-end">   <button className="btn btn-outline-danger btn-sm " onClick={()=>handleAdd(item)} > <i className="fa-solid fa-cart-plus"> </i> Add</button></div>
            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
