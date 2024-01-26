import React from "react";
import ImgSlider from "../components/ImgSlider";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="homeImg">
        <img src="/images/home-background.png" alt="" />
      </div>
      <ImgSlider />
    </div>
  );
};

export default Home;
