import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [CartItemsCount, setCartItemsCount] = useState(0);

  const getData = async () => {
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
  };

  useEffect(() => {
    getData();
  }, []);

  return <CartContext.Provider value={{ CartItemsCount ,setCartItemsCount}} >
    {children}

  </CartContext.Provider>
};

export default CartContextProvider

