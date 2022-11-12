
import React, { useEffect } from 'react'
import Announcement from '../components/Announcement'
import Blog from '../components/Newsletter'
import Footer from '../components/Footer'
import Helmet from '../components/Helmet'
import Header from '../components/Header'
import ProductView from '../components/ProductDetails/ProductView'
import Section, { SectionBody, SectionTitle } from '../components/ProductDetails/Section'
import ProductCard from '../components/ProductCard'

import { mobile } from '../responsive'
import { useParams } from 'react-router-dom'
import productData, { products, getProductBySlug } from '../data'
import { useDispatch } from 'react-redux'

const Product = props => {

  const params = useParams();
  
  const product = productData.getProductBySlug(params.slug)

  const dispatch = useDispatch();

  // const relatedProducts = productData.getAllProducts(8)

    return (
<>
        <Header />
            <Announcement />
        <Section>
          <SectionBody>
            <ProductView  product={product}/>
          </SectionBody>
        </Section>

        {/* <Section>
          <SectionTitle>
            Related Products
          </SectionTitle>

          <SectionBody>
            {relatedProducts.map((item, index) => (<ProductCard product={product} />))}
          </SectionBody>

        </Section> */}

            <Blog />
            <Footer />

      </>
    )
}

export default Product