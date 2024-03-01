import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Root from './routs/Root.jsx'
import Home from './Pages/Home/Components/Intro/Home.jsx'
import Products from './Pages/Products/Components/Products.jsx'
import Categories from './Pages/Categories/Components/Categories.jsx'
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
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
