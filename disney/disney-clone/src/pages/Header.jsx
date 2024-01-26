import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setSignOutState, setUserLoginDetails,selectUsername } from "../Slicer/UserSlice";
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const username = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
const navigate = useNavigate();
  
useEffect(() => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      setUser(user);
      navigate("/home");
    }
  });
}, [username]);

const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error);
        });
    }else if(username){
      signOut(auth).then(()=>{
        dispatch(setSignOutState())
        console.log("Guess who logged out ",username)
        navigate("/")
      }).catch((err)=>alert(err))
    }

  };

  const setUser = (user)=>{
    dispatch(setUserLoginDetails({
      name:user.displayName,
      email:user.email,
      photo:user.photo
    }))
  }

  return (
    <nav>
      <a className="headerLogo">
        <img src="/images/logo.svg" alt="" />
      </a>
     {username?  (<div className="navmenu">
        <div className="navItem">
          <a>
            <i className="fa-solid fa-house"></i>
            <span>HOME</span>
          </a>
        </div>
        <div className="navItem">
          <a>
            <i className="fa-solid fa-list"></i>
            <span>WATCHLIST</span>
          </a>
        </div>
        <div className="navItem">
          <a>
            <i className="fa-solid fa-star"></i>
            <span>ORIGINAL</span>
          </a>
        </div>
        <div className="navItem">
          <a>
            <i className="fa-solid fa-clapperboard"></i>
            <span>MOVIES</span>
          </a>
        </div>
        <div className="navItem">
          <a>
            <i className="fa-solid fa-search"></i>
            <span>SEARCH</span>
          </a>
        </div>
        <div className="navItem">
          <a>
            <i className="fa-solid fa-tv"></i>
            <span>SERIES</span>
          </a>
        </div>
      </div>):<></>}
      <div className="loginBtn" onClick={handleAuth}>
        {username?<span style={{fontSize:"1.3rem",minWidth:22}}>{username}</span>:<span>LOGIN</span>}
      </div>
    </nav>
  );
};

export default Header;
