import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import './Detail.css'
import db from '../firebase'

const Detail = () => {
  const {id} = useParams();
const[movieData,setMovieData] = useState({})

useEffect(()=>{
  db.collection('movies').doc(id).get()
  .then((doc)=>{
    if(doc.exists){
      setMovieData(doc.data());
    }else{
      console.log("no such document in firebase")
    }
  }).catch((e)=>console.log(e))
},[id]);

  return (
    <div className='detail'>
        <div className="detailBg">
          <img src={movieData.backgroundImg} alt={movieData.title} />
        </div>
        <div className="imgTitle">
        <img alt={movieData.title} src={movieData.titleImg} />
        </div>
        <div className="contentData">
          <div className="control">
            <button className="player">
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
            </button>
            <button className="trailer">
              <img src="/images/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </button>

            <div className="addList">
              <span/>
              
              <i className="fa-solid fa-plus"></i>
              <span/>
            </div>
            <div className="groupWatch">
            <div>  <img src="/images/group-icon.png" alt="" /></div>
            </div>
            </div>
            <div className="subTitle">{movieData.subTitle}</div>
            <div className="description">{movieData.description}</div>
        </div>
    </div>
  )
}

export default Detail