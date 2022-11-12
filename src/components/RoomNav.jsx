import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled  from 'styled-components';
import Product from "../pages/Product";




const RNav =styled.nav``;

const RoomNavContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  
  align-items: center;
  
  &:not(: last-of-type){
    margin-bottom: 16px;
  };
  
`;

const RoomNavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: inherit;
 

  &: hover {
    color: #855E42;
    background-color: 
  }

`;




const RoomNav = ({ RoomNavLinks}) => {
  
  return (
    <RNav>
      {RoomNavLinks.map(({ label, link }) => {
        return (
          <RoomNavContainer >
            <RoomNavLink to={link} >
               {label}
            </RoomNavLink>
          </RoomNavContainer>
        )
      })}
    </RNav>
  );
}


RoomNav.defaultProps = {
  RoomNavLinks: [
    {
       label: "Living Room",
      link: "../pages/Product", 
    },
    {
      label: "Dining Room",
      link: "../pages/Product",
    },
    {
      label: "Bed & Bedroom",
      link: "../pages/Product",
    },
    {
      label: "Garden",
      link: "../pages/Product",
    },
    {
      label: "Bathroom",
      link: "../pages/Product",
    },
    {
      label: "Room Decoration",
      link: "../pages/Product",
    }
  ]

};

export default RoomNav;