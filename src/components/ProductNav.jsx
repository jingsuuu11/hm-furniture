import { ArrowForwardIos } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Product from "../pages/Product";
import { mobile } from '../responsive';
import Dropdown from './Dropdown';


const PNav = styled.nav`
   padding: 0;
   height: 100%;
   
   background: none;
  ${mobile({
    background: "none",
    padding: "0",
    height: "100%",
    display: "flex"
})}
`;


export const ProductNavContainer = styled.div`
  user-select: none;
  position: relative;
  width: 100%;
  justify-content: space-between;
  
  align-items: center;
  
  &:not(: last-of-type){
    margin-bottom: 16px;
  };
  

`;

export const ProductNavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &: hover {
    color: #855E42;
  }

`;

export const PNavLabel = styled.span`
  color: ${({ isOpen }) => !isOpen ? "inherit" : "#855E42"}
`;

export const PnavLabelContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  cursor: pointer;
  &:hover ${PNavLabel} {
     opacity: 1;
     color: #855E42;
   };
`;

export const PArrowContainer = styled.div`
   svg {
        color: ${({ isOpen}) => (!isOpen ? "inherit" : "black")};
        transform: ${({ isOpen }) => (!isOpen ? "none" : "rotate(90deg)")};
    }
`;




const ProductNav = ({ ProductNavLinks, ProductMenuToggleHandler }) => {
    const [openDropDown, setopenDropDown] = useState(null);

    const openDropDownHandler = (label) => {
        if (label === openDropDown) return setopenDropDown(null);
        setopenDropDown(label);
    };
   
    const onSelectCallback = () => {
        if (ProductMenuToggleHandler) ProductMenuToggleHandler();
        setopenDropDown(null);
    };


    return (
        <PNav>
            {ProductNavLinks.map(({ label, link, tree }, index) => {
                const isOpen = openDropDown === label;
                return (
                    
                    <ProductNavContainer key={index}>
                        {link && (<ProductNavLink to={link}>{label}</ProductNavLink>)}
                        {!link && (
                            <PnavLabelContainer onClick={() => openDropDownHandler(label)}>
                                <PNavLabel isOpen={isOpen}>
                                    {label}
                                </PNavLabel>
                                <PArrowContainer>
                                    <ArrowForwardIos style={{ display: "block", marginLeft: "8px", fontSize: "small" }} />
                                </PArrowContainer>
                            </PnavLabelContainer>
                        )}     
                        {isOpen && <Dropdown tree={tree} onSelectCallback={onSelectCallback} />}                   
                    </ProductNavContainer>
                );
            })};
        </PNav>
    );
}


ProductNav.defaultProps = {
    ProductNavLinks: [
        {
            id:"001",
            label: "Tables",
            link: null,
            tree: [
                {
                    label: "Shop All Tables",
                    id:"1",
                    link: "/Product",
                    branches: null,
                },
                {
                    label: "Dinning Tables",
                    id: "2",
                    link: "/Product",
                    branches: null,
                },
                {
                    label: "Coffee Tables",
                    link: "/Product",
                    branches: null,
                },
                {
                    label: "Bedside Tables",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Dressing Tables",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Console Tables",
                    link: "../pages/Product",
                    branches: null,
                },
            ],
        },
        {
            label: "Sofas & Armchairs",
            link: null,
            tree: [
                {
                    label: "Shop All Sofas & Armchairs",
                    link: "../pages/Product",
                    branches: null,
                },
            {
                label: "Sofas",
                link: "../pages/Product",
                branches: null,
            },
            {
                    label: "Armchairs",
                    link: "../pages/Product",
                branches: null,
            },
            {
                    label: "SofaBeds",
                    link: "../pages/Product",
                branches: null,
            },
                {
                    label: "Corner Sofas & Chaise",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Shop By Size",
                    link: null,
                    branches: [
                        {
                            label: "2 Seater",
                            link: "../pages/Product",
                            branches: null,
                        },
                        {
                            label: "3 Seater",
                            link: "../pages/Product",
                            branches: null,
                        },
                        {
                            label: "4 Seater",
                            link: "../pages/Product",
                            branches: null,
                        },
                    ],
                },
            ],        
        },
        {
            label: "Beds & Mattress",
            link: null,
            tree: [
                {
                    label: "Shop All Beds & Mattress",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Beds",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Kids Beds",
                    link: "../pages/Product",
                    branches: null,
                },
            ],
        },
        {
            label: "Garden",
            link: null,
            tree: [
                {
                    label: "Shop All Garden",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Garden Tables",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Garden Chairs",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Garden benches",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Outdoor Lighting",
                    link: "../pages/Product",
                    branches: null,
                },
            ],
        },
        {
            label: "Storage",
            link: null,
            tree: [
                {
                    label: "Shop All Storage",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Shelves",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Media Cabinets",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Sideboards",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Storage benches and ottomans",
                    link: "../pages/Product",
                    branches: null,
                },
                {
                    label: "Display cabinets",
                    link: "../pages/Product",
                    branches: null,
                },
            ],
        },
        {
            label: "Sale",
            link: "../pages/Product",
        },
    ]

};

export default ProductNav;