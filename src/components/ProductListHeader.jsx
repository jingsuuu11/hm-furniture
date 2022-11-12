import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { productListCategory } from '../data'
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'


// const SampleNextArrow = (props) => {
//     const { onClick } = props
//     return (
//         <div className='control-btn' onClick={onClick}>
//             <button className='next'>
//                 <ChevronRightOutlined />
//             </button>
//         </div>
//     )
// }
// const SamplePrevArrow = (props) => {
//     const { onClick } = props
//     return (
//         <div className='control-btn' onClick={onClick}>
//             <button className='prev'>

//                 <ChevronLeftOutlined />
//             </button>
//         </div>
//     )
// }

const ProductListHeader = () => {
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    // }


    return (
        <>
            {/* <Slider {...settings}> */}
            <div className='product_list_header'>
                <div className="header_title">
                    <h1>PRODUCTS</h1>
                </div>
               
                <ul className="header_categories" >
                    
                    {productListCategory.map((item, index) => (
                        <Link to={`/${item.category}`}>   
                        <li className='header_categories_module'>
                            <li className="header_categories_img">
                                <img src={item.img} alt="" />
                            </li>
                            <li className="header_categories_title">
                                <p>{item.title}</p>
                            </li>
                            
                        </li>
                        </Link>
                    ))}
                       

                </ul>
               
                <hr className='productList_hr'/>
            </div>
            {/* </Slider> */}
        </>
    )
}

export default ProductListHeader