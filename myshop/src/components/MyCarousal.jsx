import React from 'react'

const MyCarousal = () => {
  return (
    <div id="mycar" className=" d-flex carousel slide" style={{maxHeight:"400px"}} data-bs-ride="carousel" data-bs-interval="2000">

  <div className="carousel-indicators"> 
    <button type="button" data-bs-target="#mycar" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#mycar" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#mycar" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#mycar" data-bs-slide-to="3"></button>

  </div>

  <div className="carousel-inner" >
    <div className="carousel-item active" >
      <img src="/images/val_slider.jpg" alt="valentine" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="/images/beauty_slider.jpg" alt="beauty" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="/images/book_slider.jpg" alt=" books" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="/images/lunar_red.jpg" alt="lunar" className="d-block w-100"/>
    </div>
  </div>

  <button  className="carousel-control-prev" type="button" data-bs-target="#mycar" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#mycar" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
  )
}

export default MyCarousal