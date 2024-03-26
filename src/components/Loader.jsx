import React from 'react'
import style from './Loader.module.css'

function Loader() {
  return (
    <div className={`${style.loader} d-flex justify-content-center align-items-center  `}>
      <svg className={`${style.pl}`} width={240} height={240} viewBox="0 0 240 240">
        <circle className={`${style.pl__ring} ${style.pl__ring__a}`} cx={120} cy={120} r={105} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 660" strokeDashoffset={-330} strokeLinecap="round" />
        <circle className={`${style.pl__ring} ${style.pl__ring__b}`} cx={120} cy={120} r={35} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 220" strokeDashoffset={-110} strokeLinecap="round" />
        <circle className={`${style.pl__ring} ${style.pl__ring__c}`} cx={85} cy={120} r={70} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 440" strokeLinecap="round" />
        <circle className={`${style.pl__ring} ${style.pl__ring__d}`} cx={155} cy={120} r={70} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 440" strokeLinecap="round" />
      </svg>

    </div>
  )
}

export default Loader