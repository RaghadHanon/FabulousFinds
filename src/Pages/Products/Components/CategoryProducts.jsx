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
              <h1 className={`py-2 px-3  DancingScriptFont color1 ${style.category}`}>{name ? name : "Products"}</h1>

              <div className={`${style.cards} d-flex justify-content-start gap-4 pt-4 pb-5 flex-wrap align-items-stretch row-gap-4  position-absolute`}>
                {
                  products.map(product =>
                    <div className={`d-flex flex-column  position-relative justify-content-between gap-3 ${style.card} `} key={product.id}>
                      <img className={`${style.imgStyle} flex-grow-1`} src={product.mainImage.secure_url} />
                      <h5 className={`CrimsonTextFont text-center flex-grow-1 ${style.text}`} > {product.name}</h5>
                      <h5 className={`CrimsonTextFont text-center flex-grow-1 ${style.text}`}> {product.price}$ </h5>

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

