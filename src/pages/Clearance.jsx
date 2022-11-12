import React from 'react'
import Announcement from '../components/Announcement'
import Blog from '../components/Newsletter'
import Footer from '../components/Footer'
import Helmet from '../components/Helmet'
import Header from '../components/Header'
import Section, { SectionBody, SectionTitle } from '../components/ProductDetails/Section'
import productData, { products } from '../data'
import ProductCard from '../components/ProductCard'

import { mobile } from '../responsive'
import PageProductView from '../components/ProductDetails/PageProductView'

const Clearance = props => {
    const product = productData.getProductBySlug("dining-chair-01")

    const relatedProducts = productData.getAllProducts(8)


    return (
        <>
            <Header />
            <Announcement />
            <Section>
                <SectionBody>
                    <PageProductView product={product} />
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

export default Clearance