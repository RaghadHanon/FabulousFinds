import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../../components/Loader';
import style from './products.module.css'
import { Link } from 'react-router-dom'

function Products() {
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageNum, setPageNum] = useState(1);


  const getData = async () => {
      try {
        const { data } = await axios.get(`https://ecommerce-node4.vercel.app/products?page=${page}&limit=3`);
        setError('');
        setProducts(data.products);
        setPageNum(Math.ceil(data.total / 3));
        
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
    return <Loader />


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

              {
                <nav aria-label="Page navigation example">
                  <ul className="pagination   d-flex justify-content-center">
                    <li className={`page-item ${page == 1 ? 'disabled' : ''}`} onClick={() => { (page > 1) ? setPage(page - 1) : setPage(page) }}>
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    {[...Array(pageNum).keys()].map((pageNumber) => (
                      <li key={pageNumber} className="page-item" onClick={() => { setPage(pageNumber + 1) }}>
                        <a className="page-link">{pageNumber + 1}</a>
                      </li>
                    ))}
                    <li className={`page-item ${page == pageNum ? 'disabled' : ''}`} onClick={() => { (page < pageNum) ? setPage(page + 1) : setPage(page) }}>
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                      </a>
                    </li>
                  </ul>
                </nav>

              }
            </div>
          </div>
          

        </div>
      </div>

    </>


  )
}

export default Products

