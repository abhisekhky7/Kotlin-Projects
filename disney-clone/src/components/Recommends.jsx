import React from "react";
import { Link } from "react-router-dom";
import "./Recommends.css";
import { useSelector } from "react-redux";

const Recommends = () => {
  const recommend = useSelector((s) => s.movie.recommend);
  return (
    <div className="recommend">
      <h3>Recommended for you</h3>
      <div className="content">
        {recommend &&
          recommend.map((item, key) => {
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

export default Recommends;
