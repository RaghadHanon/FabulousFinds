import React, { useContext,useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../public/images/logo/logo1c.png";
import { UserContext } from "../Context/User.jsx";
import { CartContext } from "../Context/CartContext.jsx";

function NavBar() {
  const { User, loggedIn, setLoggedIn, setUserToken } = useContext(UserContext);
  const { CartItemsCount } = useContext(CartContext);

  const logOut = () => {
    localStorage.removeItem("userToken");
    setUserToken(null);
    setLoggedIn(false);
  };
  return (
    <nav
      className={`navbar navbar-expand-lg p-0 sticky-top ${style.NavStyle} `}
    >
      <div className={`container-fluid container`}>
        <NavLink to="/">
          <img src={logo} className={style.NavLogo} />
        </NavLink>

        <button
          className={`navbar-toggler ${style.navbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars" style={{ color: "#fed9ed" }}></i>
        </button>
        <div className="collapse navbar-collapse m-2" id="navbarNav">
          <ul className="navbar-nav flex-grow-1 gap-2">
            <li className="nav-item" 
               >
              
              <NavLink
                className={`nav-link fs-6 crushedFont color4 letterSpace`}
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item" >
              
              <NavLink
                className={`nav-link fs-6 crushedFont  color4 letterSpace`}
                to="/Products"
              >
                PRODUCTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link fs-6 crushedFont color4 letterSpace`}
                to="/Categories"
              >
                CATEGORIES
              </NavLink>
            </li>
            <li className="nav-item" >
              <NavLink
                className={`nav-link fs-6 crushedFont  color4 letterSpace d-flex gap-2`}
                to="/Cart"
              >
                <div className={`position-relative top-0`} >
                <svg
                  className={`me-3 ${style.cartIcon}  `}
                  xmlns="http://www.w3.org/2000/svg"
                  height="23"
                  width="24.75"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="#fed9ed"
                    d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                  />
               
                </svg>
                {loggedIn? <span className={`${style.cartCount} position-absolute text-center color1 fw-bolder  `}>{CartItemsCount}</span>:<></>}
                </div>
                {" "}
                Cart
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav  align-self-end gap-2" >
            {loggedIn ? (
              <li className="nav-item dropdown d-flex mt-sm-1 justify-content-start gap-2 align-items-sm-center">
                <img
                  src={User.image.secure_url}
                  className={`${style.userImage}`}
                />
                <a
                  className="nav-link dropdown-toggle fs-6 text-capitalize  crushedFont  color4 letterSpace"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {User.userName}
                </a>
                <ul className="dropdown-menu bgcolor1 border-0  ">
                  <li className={`${style.dropdownItem}`} >
                    <NavLink
                      className={`${style.dropdownItem} color4  fs-6  crushedFont   letterSpace`}
                      to="/Profile/Orders"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className={`${style.dropdownItem}`}>
                    <NavLink
                      className={`${style.dropdownItem} color4 fs-6  crushedFont   letterSpace`}
                      onClick={logOut}
                    >
                      Log out
                    </NavLink>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item ">
                  <NavLink
                    className={`nav-link fs-6  crushedFont  color4 letterSpace`}
                    to="/Login"
                  >
                    Log In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link fs-6  crushedFont  color4 letterSpace`}
                    to="/Signup"
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
