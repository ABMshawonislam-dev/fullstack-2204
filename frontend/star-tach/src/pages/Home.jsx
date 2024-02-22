import React from 'react'


import Topnav from "../components/layout/Topnav.jsx"
import Catagorynav from "../components/layout/Catagorynav.jsx"
import Banner from '../components/layout/Banner.jsx'
import Bannerfooter from '../components/layout/Bannerfooter.jsx'
import NewsFeed from '../components/layout/NewsFeed.jsx'
import Cetagory from '../components/layout/Cetagory.jsx'
import Product from '../components/layout/Product.jsx'

const Home = () => {
  return (
    <>
    <Topnav/>
    <Catagorynav />
    <Banner/>
    <Bannerfooter/>
    <NewsFeed/>
    <Cetagory/>
    <Product/>
    </>
  )
}

export default Home