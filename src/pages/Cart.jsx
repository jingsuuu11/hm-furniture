import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import { Add, DeleteOutlineOutlined, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from "react-stripe-checkout"
import { userRequest } from '../requestMethod'
import {  useNavigate } from 'react-router-dom';
import { addProduct, cartActions, removeProduct } from '../redux/cartRedux'
import { removeItem } from '../redux/cartItemSlice'


const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button` 
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
  background-color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const ProductDetail = styled.div`
  flex: 1;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  margin: 20px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;  
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
  ${mobile({ marginBottom: "20px" })};
`;

const Hr = styled.hr`
  border: none;
  background-color: #eee;
  height: 1px;  
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10%;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1``;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size:  ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;


const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  

  // const handleClick = () => {
  //   dispatch(
  //     addProduct({ ...product, quantity, color })
  //   );
  // };

  const removeFromCartHandle = (id) => {
    dispatch(cartActions.removeProduct(id));
  };

  //  const total = products.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);




  const onToken = (token) => {
    setStripeToken(token);
  }

  console.log(stripeToken)

  useEffect(() => {

    const makeRequest = async () => {
      try {
        const res = await userRequest("/checkout/payment", {
          tokenID: stripeToken.id,
          amount: 500,
        });
        navigate.push("/success", { 
          stripeData: res.data,
          products: cart, 
         });
      } catch {}
    }
    stripeToken && makeRequest();

  }, [stripeToken, cart.total,navigate])


  return (
    <Container>

      <Announcement />
      <Header />

      <Wrapper>
        <Title>MY BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>
              Shopping Bag ()
            </TopText>

            <TopText>
              Wishlist (0)
            </TopText>
          </TopTexts>
          <TopButton>CHECK OUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName> <b>Product:</b>{product.name}</ProductName>
                    <ProductID><b>Quantity: </b> {product.quantity}</ProductID>
                    <ProductColor color={product.color} />
                  </Details>
                </ProductDetail>

                <PriceDetail>
                  {/* <ProductAmountContainer>
                    <div onClick={() => handleQuantity("dec")}>
                    <Remove />
                    </div>
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <div onClick={() => handleQuantity("inc")}>
                    <Add />
                    </div>
                  </ProductAmountContainer> */}
                  <div className="remove-button-cart"
                    onClick={removeFromCartHandle}
                  >
                    <DeleteOutlineOutlined style={{size: "big"}}/>
                  </div>

                  <ProductPrice>
                    ${product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />


          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SUBTOTAL</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>ESTIMATED SHIPPING</SummaryItemText>
              <SummaryItemPrice>$ 5</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>SHIPPING DISCOUNT</SummaryItemText>
              <SummaryItemPrice> $ -5 </SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>TOTAL</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="HM Furniture"
              image="https://c8.alamy.com/comp/2DDH5JW/home-furniture-logo-design-inspiration-2DDH5JW.jpg"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECK OUT</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>

      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart