import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ImgSlider.css'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}



const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  
  };
  return (
    <Slider {...settings}>
      <div>
      <a>
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </div>
     <div>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </div>

      <div>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </div>

      <div>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </div> 
    </Slider>
  );
}

export default ImgSlider;