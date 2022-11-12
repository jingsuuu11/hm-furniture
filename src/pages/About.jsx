import React from 'react'
import AboutImg from '../components/About/AboutImg'
import About_FAQ from '../components/About/About_FAQ'
import About_Services from '../components/About/About_Services'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <>
      <div>
        <Announcement />
        <Header />
         <AboutImg/>
        <About_Services/>
        <About_FAQ />

        <Newsletter />
        <Footer />
          </div>
    </>
  )
}

export default About