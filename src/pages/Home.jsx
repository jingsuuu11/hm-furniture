import React from 'react'
import Announcement from '../components/Announcement'
import Backdrop from '../components/Backdrop'
import Categories from '../components/Categories'
import FlashDeals from '../components/Flashdeals/FlashDeals'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Helmet from '../components/Helmet'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import { products } from '../data'


const Home = ({ products}) => {
  return (

     <Helmet title="HM Furniture">
        <Announcement />
      <Header/>
        {/* <Slider/>
        <Categories /> */}
      {/* <FlashDeals products={products} /> */}
        <Newsletter />
        <Footer />
    </Helmet>
    
  )
}

export default Home