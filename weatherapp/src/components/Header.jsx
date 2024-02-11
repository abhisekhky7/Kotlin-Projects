import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {

const handleSubmit = (e)=>{
}

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4">
    <div className="container-fluid p-0 ">
      <a
        className="navbar-brand"
        href=""
        style={{ border: "2px solid purple", padding: "4px" }}
      >
        WeatherApp
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav"></ul>
        <form className="d-flex m-auto " onSubmit={handleSubmit} >
          <input
            className="form-control "
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ width: "30vw",display:"none"}}
          />
          <button
            className="btn btn-outline-danger ms-1 d-none"
          >
            SEARCH
          </button>
        </form>
        <div className="" style={{color:"red"}}>
        <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to={"home"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"contact"}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to={"about"}>About Us</Link>
        </li>
      </ul>

        </div>
      </div>
    </div>
  </nav>
  );
};

export default Header;