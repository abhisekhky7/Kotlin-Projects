import React,{useState} from "react";

import MyCarousal from '../components/MyCarousal'
import Category from '../components/Category'

const Home = () => {


  return (
    <div className="container-fluid p-0">
      <MyCarousal/>
      <Category/>
    </div>
  )
}

export default Home