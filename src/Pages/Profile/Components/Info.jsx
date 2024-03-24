import React, { useContext } from 'react'
import axios from 'axios';

import { UserContext } from '../../../Context/User'

function Info() {

  const { User } = useContext(UserContext);

  return (
    <div className={`color1 d-flex flex-wrap align-items-center gap-3  CrimsonTextFont fs-6`}>
      <span className={` fw-bolder`}>User Name</span>
      <span className={`border fw-semibold  px-3 py-1`}>{User.userName}</span>
    </div>
  )
}

export default Info