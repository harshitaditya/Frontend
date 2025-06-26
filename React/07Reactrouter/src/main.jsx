import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'

import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'

const router=createBrowserRouter([{
  path:'/',
  element:<App/>,
  children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path:"contact",
            element:<Contact />

          },
          {
            path:"user/:id",
            element:<User />
          }

        ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
