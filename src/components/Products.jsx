import React from 'react'
import styled from 'styled-components'
import {products } from '../data'
import ProductItem from './ProductItem'
import Slider from "react-slick";
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Container = styled.div`
  //  margin: 0px 15px;
  //  padding: 0px 15px;
  //  background-color: white;
  //  display: flex;
  //  flex-direction: column;

`
const Title = styled.h1`
  // margin-left: 30px;
  // font-size: 25px;
`;

const ProductContainer = styled.div`
  //  display: flex;
  //  padding: 10px;
  //  justify-content: space-between;
`;


const NextArrowContainer = styled.div``;

const nextArrowbutton = styled.button``;

const prevArrowContainer = styled.div``;

const prevArrowbutton = styled.button``;



const Products = ({Component}) => {

  // const settings = {
  //   className: "center",
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 5,
  //   swipeToSlide: true,
  //   afterChange: function (index) {
  //     console.log(
  //       `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
  //     );
  //   }
  // };

//   const nextArrow = (props) => {
//   const { onClick } = props
//   return (
//     <NextArrowContainer>
//       <nextArrowbutton>
//         <ChevronRightOutlined />

//       </nextArrowbutton>
//     </NextArrowContainer>
//   )
// };

// const prevArrow = (props) => {
//   const { onClick } = props
//   return (
//     <prevArrowContainer>
//       <prevArrowbutton>
//         <ChevronLeftOutlined />
//       </prevArrowbutton>
//     </prevArrowContainer>
//   )
// }

  
  return (
    <Container>
    
    <Title>Flash Deals</Title>
      {/* <Slider {...settings}> */}

    <ProductContainer>
     
        {products.map((item)=> (
          <ProductItem item={item} key={item.id} />
    ))};
        
    </ProductContainer>
      {/* </Slider> */}
      
    </Container>
  )
}

export default Products;