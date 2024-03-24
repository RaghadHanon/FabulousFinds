import React, { useContext } from 'react'
import axios from 'axios';

import { UserContext } from '../../../Context/User'

function Info() {

  const { User } = useContext(UserContext);

  return (
    <div className={`color1 d-flex flex-wrap align-items-center gap-5 CrimsonTextFont fs-6`}>
      <span className={` fw-bolder whiteC`}>User Name</span>
      <span className={`border flex-grow-1 fw-semibold  px-3 py-1 whiteC`}>{User.userName}</span>
    </div>
  )
}

export default Info