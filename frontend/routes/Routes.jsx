import React from 'react'
import RootLayouts from '../src/components/RootLayouts';
import Home from '../pages/Home';
import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Routes