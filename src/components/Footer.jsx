import React from "react";
import logo from "../../public/images/logo/logo2.png";
import style from "./Footer.module.css";
function Footer() {
  return (
    <div className={`bgcolor1 d-flex flex-column justify-content-center align-items-center`}>
      <img src={logo} className="col-4 p-5 col-lg-5 col-sm-6 col-9" />
      <ul className={`d-flex gap-3 m-0 py-3 px-0 d-flex justify-content-center align-items-center`}>
        <li>
          <a href="https://www.linkedin.com/in/raghad-hanon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-xl" style={{ color: "#fed9ed" }}></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/raghad.hanon.3/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-xl" style={{ color: "#fed9ed" }}></i>
          </a>
        </li>
        <li>
          <a href="mailto:raghadhanoon2015@gmail.com">
          <i className="fa-solid fa-envelope fa-xl" style={{color: "#fed9ed"}}></i>
          </a>
        </li>
      </ul>
      <span className={`color4 CrimsonTextFont letterSpace p-3 text-center ${style.creater}`}>
        By Raghad Hanon
      </span>
     
    </div>
  );
}

export default Footer;
