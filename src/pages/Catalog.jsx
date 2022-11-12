import React, { useCallback, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Blog from '../components/Newsletter';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Products from '../components/Products';
import { mobile } from '../responsive';
import Helmet from '../components/Helmet'
import ProductCard from '../components/ProductCard'
import productData, { ProductFilterCategory, ProductFilterColor, ProductFilterStyle, products } from '../data';
import Checkbox from '../components/ProductList/Checkbox';
import InfinityList from '../components/ProductList/InfinityList';
import ProductListHeader from '../components/ProductListHeader'
import { useLocation } from 'react-router-dom';


const Container = styled.div``;

// const Title = styled.h1`
//   margin: 20px;
// `;

// const FilterContainer = styled.div`
//   display: flex;
//   justify-content: space-between;  
  
// `;

// const Filter = styled.div`
//   margin: 20px;
//   ${mobile({ width: "0 20px", display: "flex", flexDirection: "column" })};
// `;

// const FilterText = styled.span`
//   font-size: 20px;
//   font-weight: 600;
//   color: black;
//   margin-right: 20px;
//   ${mobile({ marginRight: "0px" })};
// `;

// const Select = styled.select`
//   padding: 10px;
//   margin-right: 20px;
//   ${mobile({ margin: "10px 0" })};
// `;

// const Option = styled.option``;


const Catalog = () => {

  const location = useLocation();
  console.log(location);
  
  const initFilter = {
    category: [],
    color: [],
    style: []
  }

  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initFilter);

  const filterSelector = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case"CATEGORY": 
        setFilter({...filter, category: [...filter.category, item.categorySlug]})
        break
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] })
          break
        case "STYLE":
          setFilter({ ...filter, style: [...filter.style, item.style] })
          break
        default:
      }
    }
    else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(e => e !== item.categorySlug)
          setFilter ({...filter, category: newCategory})
          break
        case "COLOR":
          const newColor = filter.color.filter(e => e !== item.color)
          setFilter({ ...filter, color: newColor })
          break
        case "STYLE":
          const newStyle = filter.style.filter(e => e !== item.style)
          setFilter({ ...filter, style: newStyle })
          break
        default:
      }
    }
  }

  const updateProducts = useCallback(
    () => {
      let temp = productList

      if (filter.category.length > 0) {
        temp = temp.filter(e => filter.category.includes(e.categorySlug) )
      }

      if (filter.color.length > 0) {
        temp = temp.filter(e => {
          const check = e.colors.find(color => filter.color.includes(color))
          return check !== undefined
        })
      }

      if (filter.style.length > 0) {
        temp = temp.filter(e => {
          const check = e.style.find(style => filter.style.includes(style))
          return check !== undefined
        })
      }

      setProducts(temp)
    },
    [filter, productList],
  )

  useEffect(() => {
    updateProducts()
  }, [updateProducts])
  
  


  return (
    <Helmet title="Dining Room">

      <Header />
      <Announcement />
      
      <ProductListHeader />

      {console.log(filter)}

      <div className="catalog">  
        <div className="catalog__filter">
        

        <div className="catalog__filter__widget">
          <div className="catalog__filter__widget__title">
            Category
          </div>

          <div className="catalog__filter__widget__content">
              {ProductFilterCategory.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <Checkbox 
                  label={item.name} 
                  onChange = {(input) => filterSelector("CATEGORY", input.checked, item)}
                  checked={filter.category.includes(item.categorySlug)}/>
                  </div>
              ))}
          </div>
        </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Color
            </div>

            <div className="catalog__filter__widget__content">
              {ProductFilterColor.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <Checkbox 
                  label={item.name}
                    onChange={(input) => filterSelector("COLOR", input.checked, item)} 
                    checked={filter.color.includes(item.color)}/>
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              STYLE
            </div>

            <div className="catalog__filter__widget__content">

              {ProductFilterStyle.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <Checkbox 
                  label={item.name} 
                    onChange={(input) => filterSelector("STYLE", input.checked, item)} 
                    checked={filter.style.includes(item.style)} />
                </div>
              ))}
            </div>
          </div>


        </div>

        <div className="catalog__content">
          <InfinityList
            data={products}
          />
        </div>

      </div> 
      
      {/* <Title>Dinning Room</Title>
      <FilterContainer>
        <Filter>
          <FilterText>
            Filter Products:
          </FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
          </Select>

          <Select>
            <Option disabled selected> 
              Product Type
            </Option>
            <Option>Accent Armchair</Option>
            <Option>Armchair</Option>
            <Option>Bean bag</Option>
            <Option>Bookcase</Option>
            <Option>Cabinet</Option>
          </Select>
        </Filter>
        
        <Filter>
        <FilterText>
          Sort Products:
        </FilterText>

        <Select>
          <Option selected>
            Newest
          </Option>
          <Option>Price Asc</Option>
          <Option>Price Desc</Option>
        </Select>
        </Filter>

      </FilterContainer>
      <Products /> */}
      <Blog />
      <Footer />
    </Helmet>
  )
}

export default Catalog;