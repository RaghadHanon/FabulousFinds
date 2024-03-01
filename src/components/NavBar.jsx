import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'
import logo from "../../public/images/logo/logo1c.png"

function NavBar() {
  return (
    <nav className={`navbar navbar-expand-lg p-0 sticky-top ${style.NavStyle} `}>
      <div className={`container-fluid container`}>
        <NavLink to="/"><img src={logo} className={style.NavLogo} /></NavLink>

        <button className={`navbar-toggler ${style.navbarToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars" style={{ color: "#fed9ed", }}></i>
        </button>
        <div className="collapse navbar-collapse m-2" id="navbarNav">
          <ul className="navbar-nav flex-grow-1 gap-2">

            <li className="nav-item">
              <NavLink className={`nav-link fs-6 crushedFont color4 letterSpace`} to="/">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link fs-6 crushedFont  color4 letterSpace`} to="/Products">PRODUCTS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link fs-6 crushedFont color4 letterSpace`} to="/Categories">CATEGORIES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link fs-6 crushedFont  color4 letterSpace`} to="/Cart">CART</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav  align-self-end gap-2">
            <li className="nav-item ">
              <NavLink className={`nav-link fs-6  crushedFont  color4 letterSpace`} to="/Login" >SIGN IN</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link fs-6  crushedFont  color4 letterSpace`} to="/Signup">SIGN UP</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
