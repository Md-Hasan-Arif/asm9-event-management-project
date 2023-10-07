import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home/Home';
import Root from './Components/Root/Root';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root> </Root>,
    children: [
    {
      path: '/',
      element:<Home></Home>,
    }
    // {
    //   path:'/login',
    //   element:<Login> </Login>,

    // },
    // {
    //   path:'/register',
    //   element:<Register></Register>,

    // },
    // {
    //   path:'/registerHero',
    //   element:<Hero></Hero>,

    // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
