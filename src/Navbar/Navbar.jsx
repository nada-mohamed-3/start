import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
export default function Navbar() {
  return (
    <>

        <nav className="navbar navbar-expand-lg fixed-top py-4">
              <div className="container">
                <Link className="navbar-brand text-white text-uppercase fw-bolder fs-2" to="">Start Framework</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                     
                  {/* <li className="nav-item me-3">
                       <NavLink className="nav-link rounded text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"  to="">Home</NavLink> 
                   </li> */}

                    <li className="nav-item me-3">
                      <NavLink className="nav-link rounded  text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" aria-current="page"  to="/about">About</NavLink>
                    </li>
                    <li className="nav-item me-3">
                      <NavLink className="nav-link rounded text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="/Protfolio">Protfolio</NavLink>
                    </li>
                    <li className="nav-item me-3">
                      <NavLink className="nav-link rounded text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="/contact">Contact</NavLink>
                    </li>
                    
                    
                  </ul>
                </div>
              </div>
        </nav>
    </>
  )
}
