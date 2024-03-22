import React, { useEffect, useState } from "react";
import style from "./Cart.module.css";
import axios from "axios";

import { toast } from "react-toastify";
import Loader from "../../../components/Loader";

function Cart() {
  const [loader, setLoader] = useState(true);
  const [updateCart, setUpdateCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  let [totalCartPrice, setTotalCartPrice] = useState(0);
  const token = localStorage.getItem("userToken");

  const getData = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API}/cart`, {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      });
      setCartProducts(data.products);

      let sum = 0;
      data.products.map((product) => {
        sum += (product.quantity * product.details.finalPrice);
      });
      setTotalCartPrice(sum);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, [updateCart]);

  const increaseQuantity = async (productId) => {
    setUpdateCart(true);
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API}/cart/incraseQuantity`,
        {
          productId,
        },
        {
          headers: {
            Authorization: `Tariq__${token}`,
          },
        }
      );
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setUpdateCart(false);
    }
  };

  const decreaseQuantity = async (productId) => {
    setUpdateCart(true);
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API}/cart/decraseQuantity`,
        {
          productId,
        },
        {
          headers: {
            Authorization: `Tariq__${token}`,
          },
        }
      );
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setUpdateCart(false);
    }
  };

  const removeItem = async (productId) => {
    setUpdateCart(true);
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API}/cart/removeItem`,
        {
          productId,
        },
        {
          headers: {
            Authorization: `Tariq__${token}`,
          },
        }
      );
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setUpdateCart(false);
    }

  };

  if (loader) return <Loader />;

  return (
    <div className={`d-flex flex-wrap justify-content-center py-5`}>
      <div className={` ${style.MyContainer} d-flex flex-wrap justify-content-between `}>
        <div className={`${style.box} ${style.cart} p-5 d-flex flex-column gap-5`}>
          <h1 className={`DancingScriptFont color1`}>My cart</h1>
          <div className={`d-flex flex-column gap-4`}>
            {cartProducts.map((product) =>
              updateCart ? (
                <Loader />
              ) : (
                <div key={product.productId} className={`d-flex flex-wrap justify-content-between   p-4 ${style.cartItem}`}>
                  <div className={`d-flex justify-content-start align-self-stretch gap-3 col-8 `}>
                    <img
                      src={product.details.mainImage.secure_url}
                      alt={product.details.name}
                    />
                    <div className={`d-flex flex-column justify-content-between  py-1`}>
                      <h3 className={`CrimsonTextFont color1 text-capitalize fw-semibold`}>{product.details.name}</h3>
                      <div onClick={() => removeItem(product.productId)} className={` d-flex  gap-3 align-items-center CrimsonTextFont color1 fw-semibold  `}>
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "#67729d" }}
                        ></i>
                        <span>Remove Item</span>
                      </div>
                    </div>
                  </div>
                  <div className={`d-flex align-self-stretch gap-3 col-3 ps-3 border-start border-secondary-subtle`}>
                    <div className={`d-flex flex-column align-self-stretch justify-content-between w-100 row-gap-2`}>
                      <div className={`d-flex justify-content-between gap-2 flex-wrap row-gap-2 `}>
                        <span className={`CrimsonTextFont color1 fw-semibold`}>Quantity</span>
                        <div className={`d-flex flex-wrap justify-content-between align-items-center gap-2`}>
                          <i
                            onClick={() => increaseQuantity(product.productId)}
                            className="fa-solid fa-plus"
                            style={{ color: "#67729d" }}
                          ></i>
                          <span className={`CrimsonTextFont color1 fw-semibold`}>{product.quantity}</span>
                          <i
                            onClick={() => { if (product.quantity > 0) decreaseQuantity(product.productId) }}
                            className="fa-solid fa-minus"
                            style={{ color: "#67729d" }}
                          ></i>
                        </div>
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
        </div>
        <div className={`${style.box} ${style.summary}  p-4  d-flex flex-column gap-5`}>
          <h3 className={`DancingScriptFont color1`}>Cart Summary</h3>
          <div>
            <div>
              <span>Free shipping</span>
              <span>$0.00</span>
            </div>
            <div>
              <span>Express shipping</span>
              <span>$15.00</span>
            </div>
            <div>
              <span>Pick Up</span>
              <span>%21.00</span>
            </div>
          </div>
          <div>
            <span>Total</span>
            <span>{totalCartPrice}</span>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>

  );
}

export default Cart;
