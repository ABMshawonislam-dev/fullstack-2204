import React from 'react'
import Banner from '../src/components/layout/Banner'
import FeatureProduct from '../src/components/layout/FeatureProduct'
import FeaturedCategori from '../src/components/layout/FeaturedCategori'

function Home() {
  return (
    <section className='bg-[#F2F4F8]'>
      <Banner/>
      <FeaturedCategori/>
      <FeatureProduct/>
    </section>
  )
}

export default Home