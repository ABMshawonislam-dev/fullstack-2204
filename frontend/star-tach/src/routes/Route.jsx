import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import RouteLayout from '../components/comon/RouteLayout';

const router = createBrowserRouter([
    {
      path: "/",
      element:<RouteLayout/>,
      children:[
        {
            path: "/",
            element:<Home/>,   
        },
       
      ]
    },
  ]);

export default router