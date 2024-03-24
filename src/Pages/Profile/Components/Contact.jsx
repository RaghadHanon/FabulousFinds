import React, { useContext } from 'react'
import axios from 'axios';

import { UserContext } from '../../../Context/User'

function Contact() {

  const { User } = useContext(UserContext);

  return (
    <div className={`color1 d-flex flex-wrap align-items-center gap-5 CrimsonTextFont  fs-6`}>
      <span className={`fw-bolder whiteC`}>Email</span>
      <span className={`border flex-grow-1 fw-semibold px-3 py-1 whiteC`}>{User.email}</span>
    </div>
  )
}
export default Contact