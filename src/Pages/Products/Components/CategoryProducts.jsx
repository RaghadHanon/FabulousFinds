import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../../components/Loader';
import style from './CategoryProducts.module.css'
import { Link } from 'react-router-dom'


function CategoryProducts() {
  const { name, id } = useParams();

  const [loader, setLoader] = useState(true);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);


  const getData = async () => {
    try {
      const { data } = await axios.get(`https://ecommerce-node4.vercel.app/products/category/${id}`);
      setError('');
      setProducts(data.products);
    } catch {
      setError("Can not load data!");
    }
    finally {
      setLoader(false)
    }

  }

  useEffect(() => {
    getData();
  }, [page]);

  if (loader)
    return <Loader />;


  return (

    <>
      {error ?? <p>{error}</p>}
      <div className={`${style.products} position-relative d-flex flex-column justify-content-center align-items-center `}>
        <div className={`container`}>
          <div>
            <div className={` position-relative d-flex flex-column justify-content-between   ${style.box}`}>
              <diV>
              <h1 className={`py-2 px-3  DancingScriptFont color1 ${style.category}`}>{name ? name : "Products"}</h1>
              {products.length == 0 ? <span className={`ps-5 color1 fs-5 CrimsonTextFont`}>No products yet</span> : <></>}

              </diV>
            
              <div className={`${style.cards} d-flex justify-content-start gap-4 pt-4 pb-5 flex-wrap align-items-stretch row-gap-4  position-absolute`}>
                {products.map(product =>
                  <div className={`d-flex flex-column  position-relative justify-content-between gap-3 ${style.card} `} key={product.id}>
                    <img className={`${style.imgStyle} flex-grow-1`} src={product.mainImage.secure_url} />
                    <h5 className={`CrimsonTextFont text-center flex-grow-1 ${style.text}`} > {product.name}</h5>
                    <div className={`d-flex row-gap-3 gap-3 justify-content-between  flex-wrap `}>
                      <div className={` d-flex gap-2`}>
                        {Array.from({ length: product.avgRating }).map((_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height='20'
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="#67729d"
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            />
                          </svg>
                        ))}
                        {Array.from({ length: 5 - product.avgRating }, (_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height='20'
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="#67729d"
                              d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
                            />
                          </svg>
                        ))}
                      </div>
                      {product.discount != 0 ?
                        <div className={`d-flex justify-content-between gap-3 `}>
                          <h5 className={`CrimsonTextFont color1 text-end flex-grow-1 ${style.text}`}> {product.finalPrice}$ </h5>
                          <h5 className={`CrimsonTextFont color1 text-end text-decoration-line-through flex-grow-1 ${style.text}`}> {product.price}$ </h5>
                        </div> :
                        <h5 className={`CrimsonTextFont color1 text-end flex-grow-1 ${style.text}`}> {product.price}$ </h5>
                      }
                    </div>
                    <div className={`${style.View} position-absolute top-0 bottom-0 end-0 start-0 z-1`}>
                      <div className={`${style.layer} d-flex flex-column justify-content-end position-absolute top-0 bottom-0 end-0 start-0 z-1`}>
                        <Link className={`${style.viewMore}  bgcolor1 d-flex justify-content-center align-items-center DancingScriptFont `} to={`/Products/${product.id}`}>View More</Link>
                      </div>
                    </div>
                  </div>
                )

                }
              </div>



            </div>
          </div>

        </div>
      </div>

    </>


  )

}
export default CategoryProducts

