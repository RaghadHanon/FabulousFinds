import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import style from './product.module.css'

import Loader from './Loader';
function Product() {

  const { id } = useParams();


  const [loader, setLoader] = useState(true);
  const [error, setError] = useState('');
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState({});
  const [displayImg, setDisplayImg] = useState('');
  const [rating, setRating] = useState(0);


  const getData = async () => {
    try {
      const { data } = await axios.get(`https://ecommerce-node4.vercel.app/products/${id}`);
      setError('');

      console.log(data);
      setProduct(data.product);
      setReviews(data.product.reviews);
      setDisplayImg(data.product.mainImage.secure_url);
      setRating(data.avgRating);


    } catch {
      setError("Can not load Data!");
    }
    finally {
      setLoader(false);
    }

  }
  useEffect(() => {
    getData();
  }, []);

  if (loader)
    return <Loader />


  return (
    <>
      {error ?? <p> {error} </p>}
      <div className={`container  `}>
        <div className={`d-flex  flex-wrap row-gap-3 justify-content-between  position-relative ${style.box} `}>
          {product.discount != 0 ? <span className={`text-decoration-line-through position-absolute CrimsonTextFont ${style.discount} `}>{product.price}$</span>:<span></span>}


          <div className={`col-lg-6 col-12 d-flex justify-content-between gap-md-3 gap-2`}>
           <img className={`${style.mainImg}`} src={displayImg} />
           
            <div className={` ${style.imgContainer} d-flex flex-column justify-content-start gap-md-3 gap-2`}>

              <button onClick={() => setDisplayImg(product.mainImage.secure_url)} className={`${style.imgButton}`} >
                <img className={`${style.imgStyle}`} src={product.mainImage.secure_url} />
              </button>
              {

                product.subImages.map(category =>
                  <button onClick={() => setDisplayImg(category.secure_url)} className={`${style.imgButton}`}>
                    <img className={`${style.imgStyle}`} src={category.secure_url} />
                  </button>

                )
              }
            </div>
          </div>

          {
            <div className={` d-flex col-lg-6 col-12 flex-column color1 justify-content-between  gap-3 flex-wrap ${style.card} `}>

              <div  className={` d-flex flex-column gap-5 `}>

                <div className={` d-flex flex-column gap-3`}>

                  <h3 className={`DancingScriptFont  fw-bolder ${style.title}`} > {product.name}</h3>
                  <div className={` d-flex gap-2`}>
                    {Array.from({ length: rating }).map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height='30'
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
                        height='30'
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

                <p className={`CrimsonTextFont `} > {product.description}</p>

              </div>
              <button className={`CrimsonTextFont ${style.shopButton} `}> Shop Now |  <span> {product.finalPrice}$</span> </button>

            </div>

          }

        </div>
      </div>
    </>

  )
}

export default Product