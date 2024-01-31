import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NewDisney.css";

const NewDisney = () => {
const newDisney = useSelector((state)=>state.movie.newDisney)

  return (
    <div className="newDisney">
      <h4 style={{paddingTop:25,fontFamily:"sans-serif"}}>New to Disney+</h4>
      <div className="content">
        {newDisney &&
          newDisney.map((item, key) => {
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

export default NewDisney;
