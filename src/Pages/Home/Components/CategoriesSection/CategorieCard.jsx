import React from 'react'
import style from './CategorieCard.module.css'

function CategorieCard({title, imgSRC}) {
  return (
    <div className={`d-flex flex-column justify-content-around align-items-center  py-lg-5 py-4 px-md-3 px-1 gap-sm-5 gap-4 ${style.card}`}>
      <div className={`position-relative ${style.frame}`}>
        <span className={`d-flex justify-content-center align-items-center position-absolute ${style.circle}`}>
          <img className={`${style.cardImage}`} src={imgSRC} />
        </span>
      </div>
      <h3 className={`crushedFont ${style.titleStyle}  `}> {title} </h3>
      
    </div>
  )
}

export default CategorieCard