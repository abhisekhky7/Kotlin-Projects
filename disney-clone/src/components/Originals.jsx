import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Originals.css";

const Originals = () => {
  const original = useSelector((s)=>s.movie.original)
  return (
    <div className="originals">
      <h4 style={{paddingTop:25,fontFamily:"sans-serif"}}>Originals</h4>
      <div className="content">
        {original &&
          original.map((item, key) => {
            return (
              <div key={key}>
                <Link to={`/detail/` + item.id}>
                  <img src={item.cardImg} alt={item.title} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Originals;
