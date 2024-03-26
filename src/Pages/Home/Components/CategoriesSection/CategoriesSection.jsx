import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import CategorieCard from "./CategorieCard.jsx";
import Loader from "../../../../components/Loader.jsx";
import style from "./CategoriesSection.module.css";
import axios from "axios";

import cat1 from "../../../../../public/images/categories/shopping.png";
import cat2 from "../../../../../public/images/categories/appliances.png";
import cat3 from "../../../../../public/images/categories/woman.png";
import cat4 from "../../../../../public/images/categories/mobile-app.png";
import cat5 from "../../../../../public/images/categories/headphones.png";
import cat6 from "../../../../../public/images/categories/laptop-screen.png";
import cat7 from "../../../../../public/images/categories/sofa.png";
import cat8 from "../../../../../public/images/categories/perfume.png";
import cat9 from "../../../../../public/images/categories/makeup.png";

function CategoriesSection() {
  let [loader, setLoader] = useState(true);
  let [error, setError] = useState("");
  let [categoryCard, setCategotyCards] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/categories/active?page=1&limit=9#`
      );
      setCategotyCards(data.categories);
      setError("");
    } catch {
      toast.error(error.response.data.message);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let indx = 0;
  const categoriesImg = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9];

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <div className={`  ${style.cards}`}>
        <div className={` ${style.container}`}>
          <h2 className={`color1 crushedFont container`}>Categories</h2>
          {error ?? <p className="error p-3 color4"> {error} </p>}
        </div>
        <div className={`${style.rect}`}>
          <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={5}
            navigation={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1270: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
            className={`${style.swiper}`}
          >
            {categoryCard.map((category) => (
              <SwiperSlide key={category.id}>
                <Link
                  className={`${style.linkStyle}`}
                  to={`/Products/${category.name}/${category.id}`}
                >
                  <CategorieCard
                    key={category.id}
                    title={category.name}
                    imgSRC={categoriesImg[indx++]}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default CategoriesSection;
