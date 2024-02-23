import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../layout/Footer'
import Topnav from '../layout/Topnav'
import Catagorynav from '../layout/Catagorynav'

const RouteLayout = () => {
  return (
    <>
    <Topnav/>
    <Catagorynav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RouteLayout