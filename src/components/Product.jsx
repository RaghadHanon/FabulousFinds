import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { UserContext } from "../Context/User";
import style from "./product.module.css";
import { CartContext } from "../Context/CartContext";
import { Bounce, toast } from "react-toastify";
import Loader from "./Loader";

function Product() {
  const { CartItemsCount, setCartItemsCount } = useContext(CartContext);
  const { User, loggedIn } = useContext(UserContext);
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState([]);
  const [displayImg, setDisplayImg] = useState("");
  const [rating, setRating] = useState(0);
  const [myReview, setMyReview] = useState({
    comment: "",
    rating: 0,
  });

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/products/${id}`
      );

      setProduct(data.product);
      setDisplayImg(data.product.mainImage.secure_url);
      setRating(data.avgRating);
    } catch {
      toast.error(error.response.data.message, {
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

  const addToCart = async (productId) => {
    if (loggedIn) {
      const token = localStorage.getItem("userToken");
      try {
        const { data } = await axios.post(
          `https://ecommerce-node4.vercel.app/cart`,
          {
            productId, //saame as productId = productId, becouse name is the same
          },
          {
            headers: {
              Authorization: `Tariq__${token}`,
            },
          }
        );

        toast.success("Product successfully added!", {
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
        setCartItemsCount(CartItemsCount + 1);
      } catch (error) {
        toast.error(error.response.data.message, {
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
    } else {
      toast.error("Please Login to your account first", {
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
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMyReview({
      ...myReview,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/products/${id}/review`,
        myReview,
        {
          headers: {
            Authorization: `Tariq__${localStorage.getItem("userToken")}`,
          },
        }
      );
      getData();
    } catch (error) {
      toast.error(error.response.data.message, {
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
    setMyReview({
      comment: "",
      rating: 0,
    });
  };

  if (loader) return <Loader />;

  return (
    <>
      <div className={`container  `}>
        <div
          className={`d-flex  flex-wrap row-gap-3 justify-content-between ${style.box} position-relative`}
        >
          {product.discount != 0 ? (
            <span
              className={`text-decoration-line-through position-absolute CrimsonTextFont ${style.discount} `}
            >
              {product.price}$
            </span>
          ) : (
            <span></span>
          )}

          <div
            className={`col-lg-6 col-12 d-flex flex-sm-row flex-column justify-content-between gap-md-3 gap-2`}
          >
            <div
              className={`${style.mainImg}  d-flex flex-column justify-content-md-start  justify-content-center`}
            >
              <img src={displayImg} />
            </div>

            <div
              className={` ${style.imgContainer} d-flex flex-sm-column justify-content-start gap-md-3 gap-2 `}
            >
              <button
                onClick={() => setDisplayImg(product.mainImage.secure_url)}
                className={`${style.imgButton}`}
              >
                <img
                  className={`${style.imgStyle}`}
                  src={product.mainImage.secure_url}
                />
              </button>
              {product.subImages.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setDisplayImg(category.secure_url)}
                  className={`${style.imgButton}`}
                >
                  <img
                    className={`${style.imgStyle}`}
                    src={category.secure_url}
                  />
                </button>
              ))}
            </div>
          </div>

          <div
            className={` d-flex col-lg-6 col-12 flex-column color1 justify-content-between  gap-3 flex-wrap ${style.card} `}
          >
            <div className={` d-flex flex-column gap-5 `}>
              <div className={` d-flex flex-column gap-3`}>
                <h3 className={`DancingScriptFont  fw-bolder ${style.title}`}>
                  {" "}
                  {product.name}
                </h3>
                <div className={` d-flex gap-2`}>
                  {Array.from({ length: rating }).map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="#67729d"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                  ))}
                  {Array.from({ length: 5 - rating }, (_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="#67729d"
                        d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              <p className={`CrimsonTextFont `}> {product.description}</p>
            </div>
            <button
              onClick={() => addToCart(product._id)}
              className={`CrimsonTextFont ${style.shopButton} `}
            >
              {" "}
              Shop Now | <span> {product.finalPrice}$</span>{" "}
            </button>
          </div>
        </div>

        <div className={` ${style.reviewBox} d-flex flex-column gap-3`}>
          {loggedIn ? (
            <form
              onSubmit={handleSubmit}
              className={`${style.review} p-sm-4 p-3 d-flex gap-3 flex-wrap  position-relative top-0 `}
            >
              <div className={`d-flex gap-3 `}>
                <img
                  className={`${style.reviewImg}`}
                  src={User.image.secure_url}
                />
                <div className={`d-flex flex-column gap-2`}>
                  <span className={`fs-5 CrimsonTextFont color1 fw-semibold`}>
                    {User.userName}
                  </span>
                  <div onSubmit={handleSubmit} className={` d-flex gap-2`}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <div key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 576 512"
                          onClick={() =>
                            setMyReview({
                              ...myReview,
                              rating: index + 1,
                            })
                          }
                        >
                          {myReview.rating >= index + 1 ? (
                            <path
                              fill="#67729d"
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            />
                          ) : (
                            <path
                              fill="#67729d"
                              d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
                            />
                          )}
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <input
                type="text"
                placeholder="Add comment..."
                name="comment"
                onChange={handleChange}
                className={`align-self-stretch m-0 CrimsonTextFont ${style.comment} p-3 border w-100 `}
              />
              <input
                type="submit"
                value="Add"
                className={` px-5 bgcolor1 whiteC border-0 py-1 rounded CrimsonTextFont`}
              ></input>
            </form>
          ) : (
            <></>
          )}
          {product.reviews.map((review) => (
            <div
              className={`${style.review} p-sm-4 p-3 d-flex gap-3 flex-wrap  position-relative top-0 `}
            >
              <div className={`d-flex gap-3 `}>
                <img
                  className={`${style.reviewImg}`}
                  src={review.createdBy.image.secure_url}
                />
                <div className={`d-flex flex-column gap-2`}>
                  <span className={`fs-5 CrimsonTextFont color1 fw-semibold`}>
                    {review.createdBy.userName}
                  </span>
                  <div className={` d-flex gap-2`}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#67729d"
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        />
                      </svg>
                    ))}
                    {Array.from({ length: 5 - review.rating }, (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#67729d"
                          d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p
                className={`align-self-stretch m-0 CrimsonTextFont ${style.comment} p-3 border w-100 `}
              >
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
