import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Trending.css";
const Trending = () => {

const trend = useSelector((s)=>s.movie.trending)
  return (
    <div className="trending">
      <h4 style={{paddingTop:25,fontFamily:"sans-serif"}}>Trending</h4>
      <div className="content">
        {trend &&
          trend.map((item, key) => {
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

export default Trending;
