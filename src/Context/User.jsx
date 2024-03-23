import React, {useState, useEffect,createContext } from 'react'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';


export const UserContext = createContext();

const UserContextProvider = ({children})=> {
  const [userToken,setUserToken] = useState(localStorage.getItem('userToken'));
  const [User,setUser] = useState(null);
  const [loggedIn ,setLoggedIn]=useState(false);

  const getUserData =async ()=>{
      if(userToken != null){
        
        const { data } = await axios.get(`${import.meta.env.VITE_API}/user/profile`,{
          headers:{
            Authorization:`Tariq__${userToken}`,
          }
        });

        setLoggedIn(true);
        setUser(data.user);   
      }
      else setUser(null);
      
  };
  useEffect(()=> {
    getUserData();
  },[userToken]);
  return <UserContext.Provider value={{User,loggedIn,setLoggedIn,setUserToken}}>
    {children}
  </UserContext.Provider>
};

export default UserContextProvider;