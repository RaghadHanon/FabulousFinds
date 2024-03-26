import React, { useEffect, useState, useContext } from "react";
import style from "./Cart.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader";

function Cart() {
  const { setCartItemsCount } = useContext(CartContext);
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
      setCartItemsCount(data.products.length);

      let sum = 0;
      data.products.map((product) => {
        sum += product.quantity * product.details.finalPrice;
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

  const clearCart = async () => {
    setUpdateCart(true);
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API}/cart/clear`,
        {},
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
      <div
        className={` ${style.MyContainer} d-flex flex-wrap justify-content-lg-between align-items-lg-start align-items-center row-gap-5 flex-lg-row flex-column position-relative top-0 `}
      >
        <div className={`${style.box} ${style.cart} d-flex flex-column gap-5 `}>
          <h1 className={`DancingScriptFont color1 border-bottom`}>My cart</h1>
          {cartProducts.length > 0 ? (
            <>
              <div className={`d-flex flex-column gap-4`}>
                {cartProducts.map((product) =>
                  updateCart ? (
                    <Loader />
                  ) : (
                    <div
                      key={product.productId}
                      className={`d-flex flex-sm-row flex-column row-gap-3 justify-content-between   p-md-4 p-3 ${style.cartItem}`}
                    >
                      <div
                        className={`d-flex justify-content-start align-self-stretch gap-3 col-xl-8 col-sm-7 col-12 `}
                      >
                        <img
                          src={product.details.mainImage.secure_url}
                          alt={product.details.name}
                        />
                        <div
                          className={`d-flex flex-column justify-content-between`}
                        >
                          <div className={`d-flex flex-column gap-1`}>
                            <h3
                              className={`CrimsonTextFont color1 text-capitalize fw-semibold`}
                            >
                              {product.details.name}
                            </h3>

                            <NavLink
                              to={`/Products/${product.details._id}`}
                              className={`ps-lg-3 pb-1 text-decoration-none CrimsonTextFont `}
                            >
                              View product
                            </NavLink>
                          </div>

                          <div
                            onClick={() => removeItem(product.productId)}
                            className={` ${style.cursorPointer} d-flex  gap-sm-2 gap-1 align-items-center CrimsonTextFont color1 fw-semibold  `}
                          >
                            <i
                              className={`fa-solid fa-xmark `}
                              style={{ color: "#67729d" }}
                            ></i>
                            <span>Remove Item</span>
                          </div>
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
                            <div
                              className={`d-flex flex-wrap justify-content-between align-items-center gap-2`}
                            >
                              <i
                                onClick={() =>
                                  increaseQuantity(product.productId)
                                }
                                className="fa-solid fa-plus"
                                style={{ color: "#67729d" }}
                              ></i>
                              <span
                                className={`CrimsonTextFont color1 fw-semibold`}
                              >
                                {product.quantity}
                              </span>
                              <i
                                onClick={() => {
                                  if (product.quantity > 1)
                                    decreaseQuantity(product.productId);
                                }}
                                className="fa-solid fa-minus"
                                style={{ color: "#67729d" }}
                              ></i>
                            </div>
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
                              $ {product.details.finalPrice}
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
                              $ {product.quantity * product.details.finalPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
                <button
                  className={`CrimsonTextFont fw-semibold align-self-end`}
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </>
          ) : (
            <NavLink
              to="/products"
              className={`CrimsonTextFont fw-semibold color1 p-2  text-decoration-none `}
            >
              {" "}
              explore products from here to add some!
            </NavLink>
          )}
        </div>
        <div
          className={`${style.box} ${style.summary}   p-4  d-flex flex-column gap-5`}
        >
          <h3 className={`DancingScriptFont color1`}>Cart Summary</h3>
          <div className={` d-flex flex-column justify-content-between gap-4`}>
            <div
              className={`${style.summDiv} d-flex justify-content-between align-items-center px-3 CrimsonTextFont fw-semibold `}
            >
              <span>Free shipping</span>
              <span>$0.00</span>
            </div>
            <div
              className={`${style.summDiv} d-flex justify-content-between align-items-center px-3 CrimsonTextFont fw-semibold `}
            >
              <span>Express shipping</span>
              <span>$0.00</span>
            </div>
            <div
              className={`${style.summDiv} d-flex justify-content-between align-items-center px-3 CrimsonTextFont fw-semibold `}
            >
              <span>Pick Up</span>
              <span>%100</span>
            </div>
          </div>
          <div
            className={`color1 d-flex justify-content-between align-items-center px-1 CrimsonTextFont fw-bolder fs-5`}
          >
            <span>Total</span>
            <span>$ {Math.round(totalCartPrice)}</span>
          </div>
          {cartProducts.length > 0 ? (
            <NavLink
              className={`CrimsonTextFont fw-semibold whiteC  text-decoration-none`}
              to="/CreateOreder"
            >
              <button className={`CrimsonTextFont fw-semibold w-100`}>
                Checkout
              </button>
            </NavLink>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
export default Cart;
