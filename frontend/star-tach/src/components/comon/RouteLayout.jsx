import React from 'react'
import { Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
    <>
    {/* <Navber/> */}
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default RouteLayout