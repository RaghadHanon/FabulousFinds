import React, { useContext } from 'react'
import axios from 'axios';

import { UserContext } from '../../../Context/User'

function Contact() {

  const { User } = useContext(UserContext);

  return (
    <div className={`color1 d-flex align-items-center  CrimsonTextFont fw-bolder fs-6`}>
      <span className={`col-6`}>Email</span>
      <span className={`border col-6 px-3 py-1`}>{User.email}</span>
    </div>
  )
}
export default Contact