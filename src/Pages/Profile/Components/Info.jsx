import React, { useContext } from 'react'
import axios from 'axios';

import { UserContext } from '../../../Context/User'

function Info() {

  const { User } = useContext(UserContext);

  return (
    <div className={`color1 d-flex align-items-center  CrimsonTextFont fw-bolder fs-6`}>
      <span className={`col-6`}>User Name</span>
      <span className={`border col-6 px-3 py-1`}>{User.userName}</span>
    </div>
  )
}

export default Info