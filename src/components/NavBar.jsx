import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'
import logo from "../../public/images/logo/logo1c.png"
import { UserContext } from '../Context/User.jsx'
function NavBar() {
  const { User,loggedIn,setLoggedIn,setUserToken} = useContext(UserContext);
  console.log(User);
  const logOut = ()=>{
    localStorage.removeItem('token');
    setUserToken(null);
    setLoggedIn(false);
  };
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

            {loggedIn ?
              <li className="nav-item dropdown" >
                <a className="nav-link dropdown-toggle fs-6 text-capitalize  crushedFont  color4 letterSpace" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {User.userName}
                </a>
                <ul className="dropdown-menu ">
                  <li className={`${style.dropdownItem}`}><NavLink className={`${style.dropdownItem} fs-6  crushedFont   letterSpace`}  to='/Profile'>Profile</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li className={`${style.dropdownItem}`}><span className={`${style.dropdownItem} fs-6  crushedFont   letterSpace`} onClick={logOut}>Log out</span></li>
                </ul>
              </li>
              :
              <>
                <li className="nav-item ">
                  <NavLink className={`nav-link fs-6  crushedFont  color4 letterSpace`} to="/Login" >Log In</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link fs-6  crushedFont  color4 letterSpace`} to="/Signup">Sign Up</NavLink>
                </li>
              </>
            }
          </ul>



        </div>
      </div>
    </nav>
  )
}

export default NavBar;
