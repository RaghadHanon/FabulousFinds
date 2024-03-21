import React, { useState } from 'react'
import style from './SendCode.module.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom'


function SendCode() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [userEmail, setUserEmail] = useState({
    email: '',
  });
  const handleChange = (e) => {
    setUserEmail({
      email:e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const { data } = await axios.patch(`${import.meta.env.VITE_API}/auth/sendcode`, userEmail);
      toast('Check your email!');
      navigate('/ResetPassword')
    }
    catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoader(false);
    }
  }
  return (
    <div className={`container d-flex justify-content-center`}>
      <div className={`${style.sendCode} m-lg-5 my-5 mx-0   d-flex flex-row-reverse justify-content-between flex-wrap`}>



        <form onSubmit={handleSubmit} className={`col-12 p-md-5 p-4 d-flex flex-column justify-content-start gap-5`}>
          <span className={`text-center DancingScriptFont fs-1 color1 fw-semibold `}>Hey There!</span>
          <p className={`color1 fs-6  CrimsonTextFont border-top pt-4`}>
            Please provide the email associated with your account so that we can send you a code to initiate the password reset process.
          </p>
          <div className='d-flex flex-column gap-3'>
            <label htmlFor='email' className={`color1 fw-semibold CrimsonTextFont`}>Email</label>
            <input type='email' id='email' name='email' value={userEmail.email} onChange={handleChange} className={`${style.inputStyle}`} required></input>
          </div>
          <input className={`bgcolor1 fw-semibold whiteC p-2  ${style.submit}`} type='submit' disabled={loader ? 'disabled' : null} value="Submit"></input>
        </form>

      </div>

    </div>
  )
}

export default SendCode

