import { useState } from 'react'
import reactLogo from './assets/react.svg'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Root from './routs/Root.jsx'
import Home from './Pages/Home/Components/Intro/Home.jsx'
import Products from './Pages/Products/Components/Products.jsx'
import CategoryProducts from './Pages/Products/Components/CategoryProducts.jsx'
import Categories from './Pages/Categories/Components/Categories.jsx'
import Product from './components/Product.jsx'
import Cart from './Pages/Cart/Components/Cart.jsx'
import Login from './Pages/Login/Components/Login.jsx'
import SendCode from './Pages/Login/Components/SendCode.jsx';
import ResetPassword from './Pages/Login/Components/ResetPassword.jsx';
import Signup from './Pages/Signup/Components/Signup.jsx'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ProtectedRoutes from './auth/ProtectedRoutes.jsx';
import UserContextProvider from './Context/User.jsx';
import Profile from './Pages/Profile/Components/Profile.jsx'


const router = createBrowserRouter([
  {
    element : <Root/>,
    children:[
      {
        path:'/',
        element :<Home/>,
      },{
        path:'/Products',
        element:<Products/>,
      },{
        path:'/Products/:name/:id',
        element:<CategoryProducts/>,
      },{
        path:'/Products/:id',
        element:<Product/>,
      },{
        path:'/Categories',
        element :<Categories/>,
      },{
        path:'/Cart',
        element:
        <ProtectedRoutes>
          <Cart/>
        </ProtectedRoutes>,
      },{
        path:'/Login',
        element :<Login/>,
      },{
        path:'/SendCode',
        element:<SendCode/>,
      },{
        path:'/ResetPassword',
        element : <ResetPassword/>,
      },{
        path:'/Signup',
        element:<Signup/>,
      },{
        path:'/forgetPassword',
        element :<forgetPassword/>,
      },{
        path: '/Profile',
        element:<Profile/>,
      }
    ]
  }
]);

function App() {

  return (
    <>
    
    <UserContextProvider> 
      <RouterProvider router={router}/>
    </UserContextProvider>,
       <ToastContainer />
    </>
  )
}

export default App
