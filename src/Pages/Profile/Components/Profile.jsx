import React, { useEffect, useState, useContext  } from "react";
import style from "./Profile.module.css";
import axios from "axios";
import { NavLink ,useLocation,Outlet} from "react-router-dom";

import { UserContext } from '../../../Context/User'

function Profile() {

  const location = useLocation();
  const { User } = useContext(UserContext);
 


  return (
    <div className={`d-flex flex-wrap justify-content-center py-5`}>
      <div className={` ${style.MyContainer} d-flex flex-wrap justify-content-between  row-gap-5 flex-column position-relative top-0 `}>

        <div className={`${style.box} ${style.profileBox}  d-flex align-items-center`}>
          <span className={` ${style.rect} bgcolor1  position-relative top-0`} ></span>
          <div className={` ${style.Header} d-flex gap-5 align-items-center position-absolute `}>
            <div className={`${style.imgContainer}   d-flex justify-content-center align-items-center bgcolor1 ms-5`}>
              <img className={`${style.userImage}`} src={User.image.secure_url} />
            </div>
            <span className={`DancingScriptFont whiteC fs-1 text-capitalize `}>{User.userName}</span>
          </div>


        </div>

        <div className={`${style.box} ${style.page} d-flex flex-column gap-5 `}>

          <div className={`border-bottom `}>
            <ul className={`d-flex justify-content-center gap-5`}>
              <li onClick={()=>setActive(1)}>
                  <NavLink className={`text-decoration-none fs-5  CrimsonTextFont  color1 ${location.pathname.includes('Orders') ? 'fw-semibold': ''} `} to="/Profile/Orders" >Orders</NavLink>
              </li>
              <li onClick={()=>setActive(2) }>
                  <NavLink className={`text-decoration-none fs-5  CrimsonTextFont  color1  ${location.pathname.includes('Info') ? 'fw-semibold': ''}`} to="/Profile/Info" >Info</NavLink>
              </li>
              <li onClick={()=>setActive(3)}>
                  <NavLink className={`text-decoration-none fs-5  CrimsonTextFont  color1  ${location.pathname.includes('Contact') ? 'fw-semibold': ''}`} to= "/Profile/Contact" >Contact</NavLink>
              </li>
            </ul>
          </div>

          <Outlet/>
         
        </div>

      </div>
    </div>

  );
}

export default Profile