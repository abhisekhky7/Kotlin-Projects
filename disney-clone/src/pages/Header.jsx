import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../Slicer/UserSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const username = useSelector((state) => state.user.name);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(userPhoto)
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
    } else if (username) {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <nav>
      <a className="headerLogo">
        <img src="/images/logo.svg" alt="" />
      </a>
      {username ? (
        <div className="navmenu">
          <div className="navItem">
              <i className="fa-solid fa-house"></i>
              <Link to="home">
                <span>HOME</span>
              </Link>
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
        </div>
      ) : (
        <></>
      )}
      {username ? (
        <div className="navsignOut">
          <img src={userPhoto} alt={username} />
          <div className="dropDown">
            <span onClick={handleAuth}>Sign out</span>
          </div>
        </div>
      ) : (
        <div className="navlogin" onClick={handleAuth}>
          Login
        </div>
      )}
    </nav>
  );
};
export default Header;
