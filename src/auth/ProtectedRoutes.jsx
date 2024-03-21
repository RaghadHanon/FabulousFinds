import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import {UserContext} from '../Context/User'

function ProtectedRoutes({children}) {
  const navigate = useNavigate();
  const {loggedIn} = useContext(UserContext);

  if(!loggedIn){
   return <Navigate to='/Login' replace />;
  }
  return children;
}

export default ProtectedRoutes