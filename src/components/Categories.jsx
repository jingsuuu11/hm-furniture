import React from 'react'
import styled from 'styled-components'
import { categories, Productcategories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from "../responsive";


const Container = styled.div`
   margin: 0px 15px;
   padding: 0px 15px;
   display: flex;
   flex-direction: column;
   padding: 20px;
   justify-content: space-between;
   ${mobile({ padding: "0", flexDirection: "column" })};
`
const Title=styled.h1`
  margin-left: 30px; 
  font-size: 25px;
`;

const CategoryContainer = styled.div`
   margin: 5px 5px;
   padding: 5px;
   display: flex;
   padding: 20px;
   justify-content: space-between;
   ${mobile({ padding: "0", flexDirection: "column" })};
`;

const Categories = () => {
  return (
    <Container>
    <Title>SHOP BY ROOM</Title>
    <CategoryContainer>
        {categories.map((item)=> (
          <CategoryItem item={item} key={item.id}/>
    ))};
    </CategoryContainer>

      <Title>SHOP BY Product</Title>
    <CategoryContainer>
        {Productcategories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))};
      </CategoryContainer>


    </Container>
  )
}

export default Categories;