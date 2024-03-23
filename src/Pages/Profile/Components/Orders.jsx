
import React, { useEffect, useState, useContext } from "react";
import style from "./Orders.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

import { toast } from "react-toastify";
import Loader from "../../../components/Loader";
import { UserContext } from '../../../Context/User'


function Orders() {
  const [loader, setLoader] = useState(true);
  const [orderProducts, setOrderProducts] = useState([]);
  let [totalCartPrice, setTotalCartPrice] = useState(0);
  const token = localStorage.getItem("userToken");

  const getData = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API}/order`, {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      });
      setOrderProducts(data.orders);

      /*let sum = 15;
      data.orders.products.map((product) => {
        sum += (product.quantity * product.details.finalPrice);
      });
      setTotalCartPrice(sum);*/
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);




  if (loader) return <Loader />;

  return (
    <div className={` d-flex flex-column gap-3`}>
      <h2 className={`DancingScriptFont color1`}>My Orders</h2>
      {orderProducts.length > 0 ?
      <div className={`border p-4 d-flex flex-wrap justify-content-lg-between align-items-lg-start align-items-center row-gap-5 flex-lg-row flex-column position-relative top-0`}>
      
          <div className={`${style.order}  d-flex flex-column gap-4`}>
          {orderProducts.map((product) =>
            (
              <div key={product.productId} className={`d-flex flex-sm-row flex-column row-gap-3 justify-content-between   p-md-4 p-3 ${style.cartItem}`}>
                <div className={`d-flex justify-content-start align-self-stretch gap-3 col-xl-8 col-sm-7 col-12 `}>
                  <img
                    src={product.details.mainImage.secure_url}
                    alt={product.details.name}
                  />
                  <div className={`d-flex flex-column justify-content-between`}>
                    <h3 className={`CrimsonTextFont color1 text-capitalize fw-semibold`}>{product.details.name}</h3>
                    
                  </div>
                </div>
                <div className={`${style.borders} d-flex align-self-stretch gap-3 col-xl-3 col-sm-4  ps-3 border-start  border-secondary-subtle`}>
                  <div className={`d-flex flex-column align-self-stretch justify-content-between w-100 row-gap-2`}>
                    <div className={`d-flex justify-content-between gap-2 flex-wrap row-gap-2 `}>
                      <span className={`CrimsonTextFont color1 fw-semibold`}>Quantity</span>
                      <span className={`CrimsonTextFont color1 fw-semibold`}>{product.quantity}</span>

                    </div>
                    <div className={`d-flex justify-content-between gap-2 flex-wrap row-gap-2 `}>
                      <span className={`CrimsonTextFont color1 fw-semibold`}>Price</span>
                      <span className={`CrimsonTextFont color1 fw-semibold`}>$ {product.details.finalPrice}</span>
                    </div>
                    <div className={`d-flex justify-content-between gap-2  flex-wrap row-gap-2`}>
                      <span className={`CrimsonTextFont color1 fw-semibold`}>Subtotal</span>
                      <span className={`CrimsonTextFont color1 fw-semibold`}>$ {product.quantity * product.details.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className={` ${style.summary}   p-4  d-flex flex-column gap-5`}>

          <div className={`color1 d-flex justify-content-between align-items-center px-1 CrimsonTextFont fw-bolder fs-5`}>
            <span>Total</span>
            <span>$ {Math.round(totalCartPrice)}</span>
          </div>
          <button className={`CrimsonTextFont fw-semibold w-100`} >Delete Order</button>
        </div>
      </div>
      : <span className={`CrimsonTextFont color1 fs-5`}> No orders yet</span>
      }
    </div>

  )
}

export default Orders