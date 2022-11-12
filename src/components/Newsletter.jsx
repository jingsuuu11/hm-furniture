import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 30vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  padding: 20px 40px;
  margin: 25px 35px;
`;


const Title = styled.h1`  
  font-size: 23px;
  margin-bottom: 20px;
  font-weight: 800;
`;
const Description = styled.div`
   font-size: 17px;
   font-weight: 300;
   margin-bottom: 20px; 
   ${mobile({ textAlign: "center" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div`
   width: 80%;
   height: 20%;
   border: none;
   display: flex;
   justify-content: space-between;
   border: 1px solid lightgrey;
   ${mobile({ width: "80%" })};
`;
const Input = styled.input`
  border: none;  
  flex: 8;
  padding-left: 20px;
  width: 60%;
`;
const Button = styled.button`
  flex: 2;
  border: none;
  margin-left: 10px;
  background-color: #DEB887;
  color: white;
  cursor: pointer;
`;


const Newsletter = () => {
  return (
    <Container>
      <Left>
        <Title>Join our newsletter for £10 off</Title>
        <Description>
          We'll email you a voucher worth £10 off your first order over £50. By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.
        </Description>
      </Left>

      <Right>
        <InputContainer>
          <Input placeholder="Enter Your Email" />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Right>
    </Container>
  )
}

export default Newsletter