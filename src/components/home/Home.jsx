import React from 'react'
import Hero from '../hero/Hero'
import Banner from '../banner/Banner'
import Banner2 from '../banner/Banner2'
import ShopByCategory from '../shopbycategory/ShopByCategory'
import Banner3 from '../banner/Banner3'
import AllData from '../alldata/AllData'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AllData/>
      <Banner/>
      <Banner2/>
      <ShopByCategory/>
      <Banner3/>
    </div>
  )
}

export default Home
