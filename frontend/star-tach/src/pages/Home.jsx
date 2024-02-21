import React from 'react'
import Topnav from "../components/layout/Topnav.jsx"
import Catagorynav from "../components/layout/Catagorynav.jsx"
import Banner from '../components/layout/Banner.jsx'

const Home = () => {
  return (
    <>
    <Topnav/>
    <Catagorynav />
    <Banner/>
    </>
  )
}

export default Home