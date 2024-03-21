import React, {useState, useEffect,createContext } from 'react'
import { jwtDecode } from "jwt-decode";
export const UserContext = createContext();

const UserContextProvider = ({children})=> {
  const [userToken,setUserToken] = useState(localStorage.getItem('userToken'));
  const [User,setUser] = useState(null);
  const [loggedIn ,setLoggedIn]=useState(false);

  const getUserData = ()=>{
      let decoded =null;
      if(userToken != null){
        decoded =jwtDecode(userToken);
        setLoggedIn(true);
      }
      setUser(decoded);
  };
  useEffect(()=> {
    getUserData();
  },[userToken]);
  return <UserContext.Provider value={{User,loggedIn,setLoggedIn,setUserToken}}>
    {children}
  </UserContext.Provider>
};

export default UserContextProvider;