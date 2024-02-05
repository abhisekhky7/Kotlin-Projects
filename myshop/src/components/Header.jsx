import React from "react";
import "./Header.css";
import Canvas from "./Canvas/CanvasTrigger";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4">
      <div className="container-fluid p-0 ">
        <a
          className="navbar-brand"
          href=""
          style={{ border: "2px solid purple", padding: "4px" }}
        >
          MyShop
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
          <form className="d-flex m-auto">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "30vw" }}
            />
            <button
              className="btn btn-outline-danger ms-1 "
             
            >
              SEARCH
            </button>
          </form>
          <div className="nav p-1 ani">
            <button
              className="btn btn-outline-danger me-2"
             
              type="button"
            >
              LOGIN
            </button>

            <Canvas />
          </div>
        </div>
      </div>
    </nav>
  );
};
