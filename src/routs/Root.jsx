import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader';

function Root() {
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComponentsLoaded(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
      {!componentsLoaded && <Loader />} 
      {componentsLoaded && (
        <>
          <NavBar />
          <Outlet />
        </>
      )}
    </>
  );
}

export default Root;

