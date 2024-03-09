import { useState } from 'react'
import reactLogo from './assets/react.svg'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Root from './routs/Root.jsx'
import Home from './Pages/Home/Components/Intro/Home.jsx'
import Products from './Pages/Products/Components/Products.jsx'
import Categories from './Pages/Categories/Components/Categories.jsx'
import Product from './components/Product.jsx'
import Cart from './Pages/Cart/Components/Cart.jsx'
import Login from './Pages/Login/Components/Login.jsx'
import Signup from './Pages/Signup/Components/Signup.jsx'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


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
        element:<Products/>,
      },{
        path:'/Products/:id',
        element:<Product/>,
      },{
        path:'/Categories',
        element :<Categories/>,
      },{
        path:'/Cart',
        element:<Cart/>,
      },{
        path:'/Login',
        element :<Login/>,
      },{
        path:'/Signup',
        element:<Signup/>,
      }
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
       <ToastContainer />
    </>
  )
}

export default App
