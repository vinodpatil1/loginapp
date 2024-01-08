import React from 'react'
import Button from '@mui/material/Button';
import {NavLink } from "react-router-dom";



const Navbar = () => {
 
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink> 
            </li>
       
            {/* <li className="nav-item">
               <NavLink to="/dashboard" className="nav-link"> Dashboard</NavLink>
            </li> */}
            </ul> 
             <ul className="navbar-nav mr-auto">
             <li className="nav-item me-3">
              <NavLink to="/login"><Button variant="contained">Sign In</Button></NavLink> 
              </li>
             </ul>

            </div>
            </div>
        </nav>  
    </>
  )
}

export default Navbar;