import React, { useEffect, useState } from 'react'

import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

import CategorieCard from './CategorieCard.jsx'
import style from './CategoriesSection.module.css'
import axios from 'axios';

import cat1 from "../../../../../public/images/categories/shopping.png"
import cat2 from "../../../../../public/images/categories/appliances.png"
import cat3 from "../../../../../public/images/categories/woman.png"
import cat4 from "../../../../../public/images/categories/mobile-app.png"
import cat5 from "../../../../../public/images/categories/headphones.png"
import cat6 from "../../../../../public/images/categories/laptop-screen.png"
import cat7 from "../../../../../public/images/categories/sofa.png"
import cat8 from "../../../../../public/images/categories/perfume.png"
import cat9 from "../../../../../public/images/categories/makeup.png"


function CategoriesSection() {


  let indx = 0;
  const categoriesImg = [cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8,cat9];


  let [CategoryCard, setCategotyCards] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=9#`);
    setCategotyCards(data.categories);
    console.log(data.categories);
  }
  useEffect(() => {
    getData();

  }, []);


  return (
    <div className={`  ${style.cards}`}>
      <div className={` ${style.container}`}>
        <h2 className={`color1 crushedFont container`}>Categories</h2>
      </div>
      <div className={`${style.rect}`}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={5}
          slidesPerGroup={1}
          navigation={{
            clickable: true,
            el: '.swiper-pagination'
          }}
          pagination={{
            clickable: true,
           }}

          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}

          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween:20,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            850: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1270: {
              slidesPerView: 5,
              spaceBetween: 10,
            }
          }}

          className={`${style.swiper}`}
        >

          {
            CategoryCard.map(category => 
              <SwiperSlide>
                <CategorieCard key={category.id} title={category.name} imgSRC={categoriesImg[indx++]} />
              </SwiperSlide>
            )
          }

        </Swiper>
      </div>

    </div>
  )
}

export default CategoriesSection

