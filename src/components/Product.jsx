import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

import style from './product.module.css'

import Loader from './Loader';
function Product() {

  const { id } = useParams();


  const [loader, setLoader] = useState(true);
  const [error, setError] = useState('');
  const [product, setProduct] = useState({});


  const getData = async () => {
    try {
      const { data } = await axios.get(`https://ecommerce-node4.vercel.app/products/${id}`);
      setError('');

      console.log(data);
      setProduct(data.product);

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
        <div className={`d-flex flex-column justify-content-between  gap-3 ${style.box} `}>

          <div >
            {
              <div className={`d-flex justify-content-between align-items-center gap-4 flex-wrap ${style.card} `}>

                <Swiper
                  modules={[Autoplay, Navigation, A11y]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={{
                    clickable: true,
                    el: '.swiper-pagination'
                  }}
                 

                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                  }}
                  
                  className={`col-md-6 col-12 `}
                >


                  {
                    product.subImages.map(category =>
                      <SwiperSlide >
                        <img className={`${style.imgStyle}`} src={category.secure_url} />
                      </SwiperSlide>
                    )
                  }
                </Swiper>

                <div className={`d-flex col-md-5 col-12  flex-column justify-content-start gap-2 color1 `}>
                  <h3 className={`DancingScriptFont  fw-bolder`} > {product.name}</h3>
                  <h5 className={`CrimsonTextFont  fw-bolder ${style.text}`} > Slug : {product.slug}</h5>
                  <h6 className={`CrimsonTextFont `} > {product.description}</h6>
                  <h5 className={`CrimsonTextFont fw-bolder ${style.text}`} > Stock : {product.stock}</h5>
                  <h5 className={`CrimsonTextFont  fw-bolder ${style.text}`} >Price : {product.price}$</h5>
                  <h5 className={`CrimsonTextFont   fw-bolder ${style.text}`} >Discount : {product.discount}</h5>
                  <h5 className={`CrimsonTextFont  fw-bolder ${style.text}`} >Final Price : {product.finalPrice}$</h5>
                  <h5 className={`CrimsonTextFont  fw-bolder ${style.text}`} >Number of sellers : {product.number_sellers}</h5>
                  
                </div>


              </div>

            }

          </div>
        </div>
      </div>
    </>

  )
}

export default Product