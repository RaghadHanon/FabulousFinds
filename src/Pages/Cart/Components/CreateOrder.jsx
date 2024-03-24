import React, { useState } from 'react'
import style from './CreateOrder.module.css'
import axios from 'axios';
import { Bounce,toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom'


function CreateOrder() {
  const navigate = useNavigate();
  const [loader,setLoader]=useState(false);
  const [order, setOrder] = useState({
    couponName: '',
    address: '',
    phone:'',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try{
      const { data } = await axios.post(`${import.meta.env.VITE_API}/order`, order,{
        headers:{
          Authorization:`Tariq__${localStorage.getItem('userToken')}`,
        }
      });
      setOrder({ couponName: '', address: '' ,phone:''});
      toast('Order Confirmed successfully!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      navigate('/Profile/Orders')
    }
    catch(error){
      toast.error(error.response.message);
    }finally{
      setLoader(false);
    }
  }
  return (
    <div className={`container d-flex justify-content-center`}>
      <div className={`${style.CreateOrder} m-lg-5 my-5 mx-0   d-flex flex-row-reverse justify-content-between flex-wrap`}>



        <form onSubmit={handleSubmit} className={`col-12  p-4 d-flex flex-column justify-content-start gap-4`}>
          <span className={`text-center DancingScriptFont fs-2 color1 fw-semibold `}>Craete Order</span>
          <p className={`border-top pt-3`}>
           </p>
            <div className='d-flex flex-column gap-2'>
            <label htmlFor='CouponName' className={`color1 fw-semibold CrimsonTextFont`}>Coupon Name</label>
            <input type='text' id='CouponName' name='CouponName' value={order.CouponName} onChange={handleChange} className={`${style.inputStyle}`} ></input>
          </div>
          <div className='d-flex flex-column gap-2'>
            <label htmlFor='address' className={`color1 fw-semibold CrimsonTextFont`}>Address</label>
            <input type='text' id='address' name='address' value={order.address} onChange={handleChange} className={`${style.inputStyle}`} required></input>
          </div>
          <div className='d-flex flex-column gap-2'>
            <label htmlFor='phone' className={`color1 fw-semibold CrimsonTextFont`}>Phone</label>
            <input type='text' id='phone' name='phone' value={order.phone} onChange={handleChange} className={`${style.inputStyle}`} required></input>
          </div>
          <input className={`bgcolor1 CrimsonTextFont fw-semibold whiteC p-2 mt-4 ${style.submit}`} type='submit' disabled={loader ? 'disabled' : null} value="Confirm Order"></input>
        </form>

      </div>

    </div>
  )
}

export default CreateOrder