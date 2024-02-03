import React from "react";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addCart } from "../myRedux/cartSlicer";

const Card = ({category}) => {
  const dispatch= useDispatch();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(null);
  const d= useSelector((state)=>state.cart.items)

 
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
    <div className="d-flex justify-content-center">
      {loading ? (
        <div className="spinner-border text-muted "/>
      ) : (
        <div className="m-2 d-flex flex-wrap justify-content-center" style={{border:"2px solid red"}} >
          {data.map((item) => (
            <div className="card p-2 m-2" style={{width:"15rem",border:"none"}} key={item.id}>
            <img src={item.image} alt={item.title} style={{ height: "180px", width: "auto", objectFit: "contain" }} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
           <div className="d-flex justify-content-end">   <button onClick={()=>handleAdd(item)} >Add</button></div>
            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;

{
  /* <div className="spinner-border text-muted"></div> */
}
