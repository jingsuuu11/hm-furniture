import { Add, FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, Star } from '@material-ui/icons'
import React, { Component, useState } from 'react'
import styled, { isStyledComponent } from 'styled-components'
import Slider from "react-slick";
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const InfoContainer = styled.div`
   opacity: 0;
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   background-color: rgba(0,0,0,0.2);
   z-index: 3;
   align-items: center;
   display: flex;
   justify-content: center;
   transition:all 0.5s ease; 
   cursor: pointer;
`;

const Container = styled.div`
  // // flex: 1;
  // margin: 5px;
  // min-width: 280px;
  // height: 350px;
  // display: flex;
  // // justify-content: center;
  // // align-items: center;	
  // position: relative;
  // overflow: hidden;
  
`;

const Image = styled.img`
   height: 75%;
   border-radius: 5%;
`;

const Icon = styled.div`
   
   height: 40px;
   width: 40px;
   border-radius: 50%;
   background-color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 10px;
   transition:all 0.5s ease; 
   &:hover {
    background-color: #F5F5DC;
    transform: scale(1.1);	
   };
`;

const ProductTop = styled.div``;

const Discount = styled.span``;

const Label = styled.label``;

const ProductDetail = styled.div``;

const ProductName = styled.h3``;

const Rate = styled.div``;

const Price = styled.div``;

const Productprice = styled.h4``;

const Button = styled.button``;

// const NextArrowContainer = styled.div``;

// const nextArrowbutton = styled.button``;

// const prevArrowContainer = styled.div``;

// const prevArrowbutton = styled.button``;

// const nextArrow = (props) => {
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

const ProductItem = ({ item }) => {

  
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


  return (
    <Container>
      {/* <Slider {...settings}> */}
      <ProductTop>
        <Image src={item.img} />
        <Discount> {item.discount} OFF</Discount>
        <Label></Label> <br />
      </ProductTop>
      <ProductDetail>
        <ProductName>{item.name}</ProductName>
        <Rate> <Star /> <Star /> <Star /> <Star /> <Star /></Rate>
        <Price>
          <Productprice>{item.price}.00</Productprice>
          <Button> <Add /></Button>

        </Price>
     
      </ProductDetail>

      {/* </Slider> */}


      {/* <InfoContainer>          
           <Icon>
              <ShoppingCartOutlined/>
            </Icon>
            <Icon>
              <SearchOutlined/>
            </Icon>
            <Icon>
              <FavoriteBorderOutlined/>
            </Icon>

        </InfoContainer> */}

    </Container>
  )
}

export default ProductItem;