import React from 'react'
import "./AboutImg.css"


const CompanyDescription = [
  {
    id: 1,
    img: "https://img.made.com/image/upload/c_lfill,d_madeplusgrey.svg,f_auto,h_618,q_auto:good,w_927/v1/mws/49ac2386-6266-4d75-8696-416a1bc838aa_LP_ABOUTUS_POD1_DESKTOP.jpg",
    title: "Exceptional Design & Quality",
    words: "HM FURNITURE is noted for exceptional design and manufacturing quality as expressed in its line of contemporary furnishings for distinguished homes and contract market for more than 50 years. We offer tables and chairs for dining, meetings and conferencing, furniture for libraries, hotels and schools, bedroom furniture and media cabinets for residential and contract clients."
  },
  {
    id: 2,
    img: "https://fisair.com/wp-content/uploads/2020/06/maderas.jpg",
    title: "Crafted at Our Mill in China",
    words: "All of our furniture is crafted at our mill in China on the northernmost island of Hokkaido. We specialize in solid and veneer wood construction using traditional techniques and modern computerized tools to create products which are uniquely styled and beautifully constructed."
  },
  {
    id: 2,
    img: "https://img.made.com/image/upload/c_lfill,d_madeplusgrey.svg,f_auto,h_618,q_auto:good,w_927/v1/mws/7e4b7fa9-64e2-4d34-a92a-0e3053ac6a04_LP_ABOUTUS_POD3_DESKTOP.jpg",
    title: "Sustainability",
    words: "We’re taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly. We’ve set a number of goals to get us there. Things like: eliminating all unnecessary plastic from our product packaging, and ensuring that the most environmentally impactful materials we use are 100% sustainably sourced."
  }
]

const About_Services = () => {
  return (
    <div className='service_container'>
  
      {CompanyDescription.map((item, index) => {
        return (
        <div className='service_card'>
        <div className='service_img'>
           <img src={item.img} alt="" />
        </div>

        <div className='service_desc'>
            <h1>{item.title}</h1>
            <p>{item.words}</p>
        </div>
        </div>
        )
      })}


    </div>
  )
}

export default About_Services