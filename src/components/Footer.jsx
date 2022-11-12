import { EmailOutlined, Facebook, Instagram, LocalPhone, Pinterest, RoomOutlined, Twitter } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
`;
const Desc = styled.p`
  margin: 20px 0px;
  
`;
const SocialContainer = styled.div`
  display: flex;

`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: 20px;
  cursor: pointer;
`;


const Center = styled.div`
  flex: 1.5;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ display: "none" })};
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const linkStyle = {
  width: "100%",
  marginTop: "5px",
  cursor: "pointer",
  color: "black"

};
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  &:hover ${linkStyle} {
     opacity: 1;
     color: #855E42;
   };
`;
const ListItem = styled.li`
  width: 100%;
  margin-top: 5px;
  cursor: pointer;
  color: inherit;
`;




const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-
  ${mobile({ backgroundColor: "#fff8f8", alignItems: "center" })};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 50%;
  ${mobile({ alignItems: "center" })};
`;

const Payment = styled.img`
  width: 60%;
  height: 20%;
  object-fit: cover;
`;

const footerAboutLinks = [
  {
    display: "About US",
    path: "/about"
  },
  {
    display: "Privacy Policy",
    path: "/about"
  },
  {
    display: "Terms & Conditions",
    path: "/about"
  },
  {
    display: "Cookie Policy",
    path: "/about"
  }
]

const footerCustomerCareLinks = [
  {
    display: "Help Center",
    path: "/about"
  },
  {
    display: "Track Your Order",
    path: "/about"
  },
  {
    display: "Terms & Conditions",
    path: "/about"
  },
  {
    display: "Cookie Policy",
    path: "/about"
  }
]

const footerInspirationLinks = [
  {
    display: "Look Book",
    path: "/blog"
  },
  {
    display: "The Home of Inspiration ",
    path: "/blog"
  },
  {
    display: "Shop Instagram",
    path: "/blog"
  },
  {
    display: "Buying and Care Guides",
    path: "/blog"
  }
]


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>HM Furniture</Logo>
        <Desc>Discover stylish furniture for your home at HM online.
          Browse coffee tables, side tables, stools and more to decorate your space.
          Add the finishing touches to your living space with our stylish side tables.
          Discover metal and wooden tables at HM in square and round styles.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <LinkContainer>
          <Title>About Us</Title>
          <List>
            {
              footerAboutLinks.map((item, index) => (
                <ListItem key={index}>
                  <Link to={item.path} style={linkStyle}>
                    {item.display}
                  </Link>
                </ListItem>
              ))
            }
          </List>
        </LinkContainer>

        <LinkContainer>
          <Title>Customer Care</Title>
          <List>
            {
              footerCustomerCareLinks.map((item, index) => (
                <ListItem key={index}>
                  <Link to={item.path} style={linkStyle}>
                    {item.display}
                  </Link>
                </ListItem>
              ))
            }
          </List>
        </LinkContainer>

        <LinkContainer>
          <Title>Inspiration</Title>
          <List>
            {
              footerInspirationLinks.map((item, index) => (
                <ListItem key={index}>
                  <Link to={item.path} style={linkStyle}>
                    {item.display}
                  </Link>
                </ListItem>
              ))
            }
          </List>
        </LinkContainer>

      </Center>

      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <RoomOutlined style={{ marginRight: "10px" }} />
          21528 Lost River Drive, Diamond Bar, CA, 91765
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: "10px" }} />
          + 626 365 8922
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} />
          huamei5558@gmail.com
        </ContactItem>
        <Payment src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png" />

      </Right>
    </Container>
  )
}

export default Footer