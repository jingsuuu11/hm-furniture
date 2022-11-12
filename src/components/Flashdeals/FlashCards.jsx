import { AddOutlined, ChevronLeftOutlined, ChevronRightOutlined, FavoriteBorder, StarOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { products } from '../../data'


const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <ChevronRightOutlined />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
       
        <ChevronLeftOutlined />
      </button>
    </div>
  )
}


const FlashCards = ({ products, addToCart }) => {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count+1)
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }


  return (
    <>
      <Slider {...settings}>
        {products.map((products) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='IMAGE'>
                <span className='discount'>{products.discount} Off</span>
                <img src={products.img} alt='' />
                {/* <div className='product-like'>
                  <label>0</label> <br />
                  <FavoriteBorder style={{ fontSize: "20px", margin: "10px 3px" }} onClick={increment}/>
                </div> */}
              </div>
            
              <div className='product-details'>
                <h4>{products.name}</h4>
                {/* <div className='rate'>
                  <StarOutlined style={{ fontSize: "15px", color: "#ffcd4e", margin: "10px 0 5px 0"}}/>
                  <StarOutlined style={{ fontSize: "15px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                  <StarOutlined style={{ fontSize: "15px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                  <StarOutlined style={{ fontSize: "15px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                  <StarOutlined style={{ fontSize: "15px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                </div> */}
                <div className='price'>
                  <h4>${products.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  {/* <button onClick={() => addToCart(products)} >
                    <AddOutlined style={{alignItems: "center", margin:"auto", padding: "auto", justifyContent: "center"}}/>
                  </button> */}
                </div>
              </div>
              </div>
            
          </div>
            
           
        
        )
      }
      )}
      </Slider>
    </>
  )
}

export default FlashCards