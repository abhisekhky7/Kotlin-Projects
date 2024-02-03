import React,{useState} from 'react'
import './Header.css'
export const Header = () => {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4">
    <div className="container-fluid ">
      <a className="navbar-brand" href="#">My Store</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav">
        </ul>
        <form className="d-flex m-auto" >
          <input className="form-control " type="search" placeholder="Search" aria-label="Search" style={{width:"30vw"}}  />
          <button className="btn btn-outline-success ms-1 "style={{color:"white",borderColor:'white',letterSpacing:1}} >SEARCH</button>

        </form>
        <div className='nav p-1 '>
        <button className="btn btn-outline-danger me-2" style={{color:"white",borderColor:'white',letterSpacing:1}} type="button">LOGIN</button>
        <button className="btn btn-outline-primary me-2" style={{color:"white",borderColor:'white',letterSpacing:1}}>CART</button>
        </div>
      </div>
    </div>
    
  </nav>
  
  )
}
