import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Navigate} from 'react-router-dom'

function ProtectedRoutes({children}) {
  const navigate = useNavigate();
  const token =localStorage.getItem('userToken')

  if(!token){
   return <Navigate to='/Login' replace />;
  }
  return children;
}

export default ProtectedRoutes