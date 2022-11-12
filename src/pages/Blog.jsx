import React from 'react'
import Announcement from '../components/Announcement'
import { BlogCategory } from '../components/blog/blogCategory'
import { BlogCard } from '../components/blog/blogCard'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Helmet from '../components/Helmet'
import Newsletter from '../components/Newsletter'


const Blog = () => {

  return (
    
    <>
          <Announcement />
              <Header />         

          <BlogCategory />
          <BlogCard />

          <Newsletter />

          <Footer />

      </>
  )
}

export default Blog