import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import {sliderItems} from '../data';
import { mobile } from "../responsive";

const Container =styled.div`
  width: 90%;
  height: 100vh;
   margin-left: auto;
    margin-right: auto;
  display:flex;
  background-color: #DEB887;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })};
`
const Arrow =styled.div`
  height: 50px;
  width: 50px;
  display:flex;
  background-color: #fff7f7;
  border-radius: 50%; 
  justify-content: center;
  align-items: center;
  position: absolute;
  top:0;
  bottom:0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  margin:auto;
  opacity: 0.5;
  cursor: pointer;
  z-index:2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform:translateX(${(props)=>props.slideIndex * -100}vw) ;
`;

const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content:center;
`;

const ImgContainer = styled.div`
  height: 100%;
`;

const Image = styled.img`
  height: 100vh;
  width: 100vw;
  align-items:center;
`;


const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0);
  const handleClick = (direction) => {
     if (direction === "left") {
      setslideIndex (slideIndex > 0 ? slideIndex -1 : 2); 
     } else {
      setslideIndex (slideIndex <2 ? slideIndex +1 : 0); 
     }
  };
  return (
    <Container>
       <Arrow direction="left" onClick={ () => handleClick("left")}>
          <ArrowLeftOutlinedIcon/>
       </Arrow>
       <Wrapper slideIndex={slideIndex} >
       {sliderItems.map((item)=> (     
        <Slide key={item.id}>
           <ImgContainer>
             <Image src={item.img} />
           </ImgContainer>
         </Slide>
       ))};
       </Wrapper>
       <Arrow  direction="right" onClick={()=> handleClick("right")}>
          <ArrowRightOutlinedIcon/>
       </Arrow>
    </Container>
  )
}

export default Slider