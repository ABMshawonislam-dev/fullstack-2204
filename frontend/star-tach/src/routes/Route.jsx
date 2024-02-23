import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import RouteLayout from '../components/comon/RouteLayout';
import Pcbuilder from '../components/layout/Sublayout/Pcbuilder';

const router = createBrowserRouter([
    {
      path: "/",
      element:<RouteLayout/>,
      children:[
        {
            path: "/",
            element:<Home/>,   
        },
        {
          path: "Pc Builder",
          element:<Pcbuilder/>
        }
       
      ]
    },
  ]);

export default router