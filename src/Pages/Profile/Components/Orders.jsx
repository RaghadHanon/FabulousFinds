import React, { useEffect, useState, useContext } from "react";
import style from "./Orders.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

import { Bounce, toast } from "react-toastify";
import Loader from "../../../components/Loader";
import { UserContext } from "../../../Context/User";

function Orders() {
  const [loader, setLoader] = useState(true);
  const [orders, setOrders] = useState([]);
  let [totalCartPrice, setTotalCartPrice] = useState(0);
  const token = localStorage.getItem("userToken");

  const getData = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API}/order`, {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      });
      setOrders(data.orders);
    } catch (error) {
      toast.error(error.response.message, {
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
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const cancelOrder = async (Id) => {
    setLoader(true);
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API}/order/cancel/${Id}`,
        {},
        {
          headers: {
            Authorization: `Tariq__${token}`,
          },
        }
      );
      getData();
    } catch (error) {
      toast.error(error.response.message, {
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
    } finally {
      setLoader(false);
    }
  };
  if (loader) return <Loader />;

  return (
    <div className={` d-flex flex-column gap-3 `}>
      {orders.length > 0 ? (
        orders.map((order) => (
          <>
            {order.products.length > 0 ? (
              <div
                className={`border border-2 rounded-1 bgwhiteC  border-secondary-subtle  d-flex  justify-content-lg-between align-items-lg-start align-items-center  flex-lg-row flex-column  `}
              >
                <div
                  className={` ${style.summary}  col-lg-4 p-4 align-self-stretch  d-flex justify-content-between flex-column gap-3`}
                >
                  <div className={` d-flex flex-column gap-2  rounded-1 `}>
                    <div
                      className={`fs-4 p-2 mb-4 border-bottom  color1 row-gap-2 d-flex flex-wrap justify-content-between gap-3 align-items-center px-1 CrimsonTextFont fw-bolder `}
                    >
                      <span>{order.status}</span>
                      <span>$ {Math.round(order.finalPrice)}</span>

                    </div>



                    {order.couponName != "" ? (
                      <div
                        className={`p-2  color1 row-gap-2 d-flex flex-wrap justify-content-start gap-3 align-items-center px-1 CrimsonTextFont fw-bolder `}
                      >
                        <span>Coupon Name :</span>
                        <span>{order.couponName}</span>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div
                      className={`p-2  color1 row-gap-2 d-flex flex-wrap justify-content-start gap-3 align-items-center px-1 CrimsonTextFont fw-bolder `}
                    >
                      <span>Payment Type :</span>
                      <span>{order.paymentType}</span>
                    </div>
                    <div
                      className={`p-2  color1 row-gap-2 d-flex flex-wrap justify-content-start gap-3 align-items-center px-1 CrimsonTextFont fw-bolder`}
                    >
                      <span>Phone Number :</span>
                      <span>{order.phoneNumber}</span>
                    </div>
                    <div
                      className={`p-2  color1 row-gap-2 d-flex flex-wrap justify-content-start gap-3 align-items-center px-1 CrimsonTextFont fw-bolder`}
                    >
                      <span>Address :</span>
                      <span>{order.address}</span>
                    </div>
                  </div>
                  {order.status != "pending" ? (
                    <></>
                  ) : (
                    <button
                      onClick={() => cancelOrder(order._id)}
                      className={`CrimsonTextFont  fw-semibold w-100 mt-5`}
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
                <div
                  key={order._Id}
                  className={`${style.order} d-flex flex-column `}
                >
                  {order.products.map((product) => (
                    <div
                      key={product.productId._id}
                      className={`d-flex flex-sm-row flex-column row-gap-3 justify-content-between   p-md-4 p-3 ${style.cartItem}`}
                    >
                      <div
                        className={`d-flex justify-content-start align-self-stretch gap-3 col-xl-8 col-sm-7 col-12 `}
                      >
                        <img
                          src={product.productId.mainImage.secure_url}
                          alt={product.productId.name}
                        />
                        <div
                          className={`d-flex flex-column justify-content-between`}
                        >
                          <h3
                            className={`CrimsonTextFont color1 text-capitalize fw-semibold`}
                          >
                            {product.productId.name}
                          </h3>

                          <NavLink
                            to={`/Products/${product.productId._id}`}
                            className={`text-decoration-none CrimsonTextFont `}
                          >
                            View product
                          </NavLink>
                        </div>
                      </div>
                      <div
                        className={`${style.borders} d-flex align-self-stretch gap-3 col-xl-3 col-sm-4  ps-3 border-start  border-secondary-subtle`}
                      >
                        <div
                          className={`d-flex flex-column align-self-stretch justify-content-between w-100 row-gap-2`}
                        >
                          <div
                            className={`d-flex justify-content-between gap-2 flex-wrap row-gap-2 `}
                          >
                            <span
                              className={`CrimsonTextFont color1 fw-semibold`}
                            >
                              Quantity
                            </span>
                            <span
                              className={`CrimsonTextFont color1 fw-semibold`}
                            >
                              {product.quantity}
                            </span>
                          </div>
                          <div
                            className={`d-flex justify-content-between gap-2 flex-wrap row-gap-2 `}
                          >
                            <span
                              className={`CrimsonTextFont color1 fw-semibold`}
                            >
                              Price
                            </span>
                            <span
                              className={`CrimsonTextFont color1 fw-semibold`}
                            >
                              $ {product.unitPrice}
                            </span>
                          </div>
                          <div
                            className={`d-flex justify-content-between gap-2  flex-wrap row-gap-2`}
                          >
                            <span
                              className={`CrimsonTextFont color1 fw-semibold`}
                            >
                              Subtotal
                            </span>
                            <span
                              className={`CrimsonTextFont color1 fw-semibold`}
                            >
                              $ {product.finalPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>


              </div>
            ) : (
              <></>
            )}
          </>
        ))
      ) : (
        <span className={`CrimsonTextFont color1 fs-5`}> No orders yet</span>
      )}
    </div>
  );
}

export default Orders;
