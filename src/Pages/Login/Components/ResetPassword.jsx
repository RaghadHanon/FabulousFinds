import React, { useState } from 'react'
import style from './ResetPassword.module.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom'

function ResetPassword() {
  const navigate = useNavigate();
  const [loader,setLoader]=useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
    code:'',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try{
      const { data } = await axios.patch(`${import.meta.env.VITE_API}/auth/forgotPassword`, user);
      localStorage.setItem('userToken',data.token);
      setUser({ email: '', password: '' ,code:''});
      toast('Password reset successful!');
      navigate('/Login')
    }
    catch(error){
      toast.error(error.response.data.message);
    }finally{
      setLoader(false);
    }
  }
  return (
    <div className={`container d-flex justify-content-center`}>
      <div className={`${style.resetPass} m-lg-5 my-5 mx-0   d-flex flex-row-reverse justify-content-between flex-wrap`}>



        <form onSubmit={handleSubmit} className={`col-12  p-4 d-flex flex-column justify-content-start gap-4`}>
          <span className={`text-center DancingScriptFont fs-2 color1 fw-semibold `}>Reset Password!</span>
          <p className={`color1 fs-6  CrimsonTextFont border-bottom pb-3 border-top pt-3`}>
            please Provide the email address associated with your account then enter the verification code you received via email,
            and finally set a new password for your account</p>
            <div className='d-flex flex-column gap-2'>
            <label htmlFor='email' className={`color1 fw-semibold CrimsonTextFont`}>Email</label>
            <input type='email' id='email' name='email' value={user.email} onChange={handleChange} className={`${style.inputStyle}`} required></input>
          </div>
          <div className='d-flex flex-column gap-2'>
            <label htmlFor='password' className={`color1 fw-semibold CrimsonTextFont`}>New Password</label>
            <input type='password' id='password' name='password' value={user.password} onChange={handleChange} className={`${style.inputStyle}`} required></input>
          </div>
          <div className='d-flex flex-column gap-2'>
            <label htmlFor='code' className={`color1 fw-semibold CrimsonTextFont`}>Code</label>
            <input type='text' id='code' name='code' value={user.code} onChange={handleChange} className={`${style.inputStyle}`} required></input>
          </div>
          <input className={`bgcolor1 CrimsonTextFont fw-semibold whiteC p-2 mt-4 ${style.submit}`} type='submit' disabled={loader ? 'disabled' : null} value="Submit"></input>
        </form>

      </div>

    </div>
  )
}

export default ResetPassword