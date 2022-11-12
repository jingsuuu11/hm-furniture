import { Badge, Menu } from '@material-ui/core';
import { ArrowDropDownOutlined, ArrowDropUpOutlined, Block, ChevronLeft, DragHandle, FavoriteBorderOutlined, MenuBook, PermIdentityOutlined, Search } from '@material-ui/icons';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../app/slices/uiSlice";

import styled, { css } from 'styled-components';
import { mobile } from "../responsive";
import RoomNav from './RoomNav';
import ProductNav from './ProductNav';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cleanup } from '@testing-library/react';


const Container = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  margin-top: 10px; 
  ${mobile({ height: "50px" })};
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  ${mobile({ padding: "10px 0" })};  
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "12px" })};
`;

const NavMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const MenuMain = styled.ul`
  list-style: none;
  margin: 0 5px;
  
`;

const btnReset = css`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  color: inherit;
  font-family: inherit;
  letter-spacing: inherit;
  font-size: inherit;
  padding: 0;  
  font-weight: 600;
  text-transform: capitalize;
  transition: color 0.3s ease;
`;

const ItemToggleButton = styled.button`
  ${btnReset}
  z-index: 100;
  position: relative;
`;

const ItemLink = styled.a``;

const MainItem = styled.li`
  display: inline;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  font-weight: 800;
  line-height: 50px;
  cursor: pointer;
  &:hover ${ItemLink} {
     opacity: 1;
     color: #855E42;
   };
  &:hover ${ItemToggleButton} {
     opacity: 1;
     color: #855E42;
   };
`;

const RoomMenu = styled.div`
  position: fixed;
  top: 100px;
  left: 100%;
  right: 0;
  bottom: 0;
  background: rgb(252, 252, 252);
  width: 15%;
  height: calc(100% - 65px);
  transition: .3s ease bottom;
  padding: 32px;
  ${mobile({ display: "none" })};
`;

const ProductMenu = styled.div`
  position: fixed;
  top: 100px;
  left: 100%;
  right: 0;
  bottom: 0;
  background: rgb(252, 252, 252);
  width: 15%;
  height: calc(100% - 65px);
  transition: .3s ease bottom;
  
  transform-origin: left center;
  transform: translateX(0px);


  padding: 32px;
  ${mobile({ display: "none" })};
`;



const Center = styled.div`
  flex: 1; 
  text-align: Center;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-left: 1px;
  padding: 1px;
  width: 80%;
  height: 100%;
  &: hover {
    border: 2px solid black;
  }
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
  width: 100%;
  height: 100%;
  padding: 10px 0 11px 2px;
  outline: none;
`;

const SearchButton = styled.button`
  border: none;
  outline: none;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
  background-color: #DEB887;
  color: white;
  padding: 12px 16px 13px;
  &: hover {
    background-color: rgba(182, 144, 95, 0.9);
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItems = styled.div`
  cursor: pointer;
  font-size: 14px; 
  margin-left: 25px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Backdrop = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100% - 100px);
  background-color: rgba(255, 255, 255, 0.1)
`;

const ProductBackdrop = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100% - 100px);
  background-color: rgba(255, 255, 255, 0.1)
`;

const mainNav = [
  {
    display: "Products",
    path: "/products"
  },
  // {
  //   display: "Clearance",
  //   path: "/clearance"
  // },
  {
    display: "Blog",
    path: "/blog"
  },
  {
    display: "Contact Us",
    path: "/contact"
  }
]

const Header = () => {

  // const dispatch = useDispatch();
  // const {RoomMenuOpen} = useSelector((state) => state.ui);

  // const RoomMenuToggleHandler = () => {
  //   dispatch(uiActions.RoomMenuToggle());
  // };

  // const RoomMenuCloseHandler = () => {
  //   if (RoomMenuOpen) dispatch(uiActions.RoomMenuClose());
  // };

  // const { ProductMenuOpen } = useSelector((state) => state.ui);

  // const ProductMenuToggleHandler = () => {
  //   dispatch(uiActions.ProductMenuToggle());
  // };

  // const ProductMenuCloseHandler = () => {
  //   if (ProductMenuOpen) dispatch(uiActions.ProductMenuClose());
  // };

  // const dropdownRef = useRef(null);

  // const handleClickOutsideDropdown = (e: any) => {
  //   if (RoomMenuOpen && !dropdownRef.current?.contains(e.target as Node)) 
  //   {
  //     dispatch(uiActions.RoomMenuToggle());
  //     console.log("clicked active")
  //   }
  // }
  // window.addEventListener("click", handleClickOutsideDropdown)

  // console.log(dropdownRef.current);

  const menuLeft = useRef(null)

  const menuToggle = () => menuLeft.current.classList.toggle('active')

  const quantity = useSelector(state => state.cart.quantity)

  const dispatch = useDispatch();
  let navigate = useNavigate();


  return (
    <Container >
      <Wrapper>
        <Left>

          <div className='header_logo'>
            <Link to="/"><h1>HM FURNITURE</h1></Link>
          </div>
          <div className='header_menu'>
            <div className="header_menu_mobile_toggle">
              <DragHandle />
            </div>
            <div className="header__menu__left" >
              <div className="header__menu__left__close" >
                <ChevronLeft />
              </div>
              {
                mainNav.map((item, index) => (
                  <div
                    key={index}
                    className="header_menu_item"
                    onClick={menuToggle}
                  >
                    <Link to={item.path}>
                      <span className='header_menu_span'><p>{item.display}</p></span>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>

          {/* <Logo onClick={RoomMenuCloseHandler}> HM Furniture</Logo>

          <NavMenu>
            <MenuMain>
              <MainItem>
                <ItemToggleButton onClick={RoomMenuToggleHandler} >
                  Shop By Room 
                  {!RoomMenuOpen ? <ArrowDropDownOutlined style={{alignItems:"center"}}/> : <ArrowDropUpOutlined />}
                </ItemToggleButton>                
              </MainItem>
              
              

              <MainItem>
                <ItemToggleButton onClick={ProductMenuToggleHandler}>
                  Shop By Product 
                  {!ProductMenuOpen ? <ArrowDropDownOutlined /> : <ArrowDropUpOutlined />}
                </ItemToggleButton>
              </MainItem>


              <MainItem><ItemLink>Blog</ItemLink></MainItem>
            </MenuMain>
          </ NavMenu> */}

        </Left>

        <Center>
          <SearchContainer>
            <Search style={{ color: "gray", fontSize: 20 }} />
            <Input placeholder="Search for products" />
            <SearchButton>Search</SearchButton>
          </SearchContainer>
        </Center>

        <Right>
          <Link to="/myaccount">
            <MenuItems style={{ color: 'black' }}>
            <PermIdentityOutlined />
            Account
          </MenuItems>
          </Link>
          <MenuItems>
            <FavoriteBorderOutlined />
            Shortlist
          </MenuItems>
          <Link to="/cart">
            <MenuItems style={{ color: 'black' }}>
              <Badge badgeContent={quantity} color="secondary">
              <ShoppingBagOutlinedIcon />
            </Badge>
            Bag
          </MenuItems>
          </Link>
        </Right>


        {/* <RoomMenu style={RoomMenuOpen ? { left: 0 } : {}}>
           <RoomNav />
         </RoomMenu>

        <ProductMenu style={ProductMenuOpen ? { left: 0 } : {}}>  
          <ProductNav  />          
        </ProductMenu>
         */}

      </Wrapper>



    </Container>
  )
};


export default Header;