import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from "../Context/User.jsx";
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [CartItemsCount, setCartItemsCount] = useState(0);
  const {loggedIn } = useContext(UserContext);
  

  const getData = async () => {
    if(loggedIn)
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API}/cart`, {
        headers: {
          Authorization: `Tariq__${localStorage.getItem('userToken')}`,
        },
      });
      setCartItemsCount(data.products.length);

    } catch (error) {
      toast.error(error.response.data.message);
    } 
    else setCartItemsCount(0);
  };

  useEffect(() => {
    getData();
  }, [loggedIn]);

  return <CartContext.Provider value={{ CartItemsCount ,setCartItemsCount}} >
    {children}

  </CartContext.Provider>
};

export default CartContextProvider

