import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home/Home';
import Root from './Components/Root/Root';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import Details from './Components/Details/Details';
import About from './Components/About/About';
import ContactUs from './Components/Contact/ContactUs';
import PrivateRout from './Private route/PrivateRout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,

      },
      {
        path: '/register',
        element: <Register></Register>,

      },
      {
        path:'/about',
        element: <PrivateRout>
             <About></About>
          </PrivateRout>,
      },
      {
        path:'/contactUs',
        element: <PrivateRout>
          <ContactUs></ContactUs>
          </PrivateRout>,
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader: ()=> fetch('/public/gym.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
