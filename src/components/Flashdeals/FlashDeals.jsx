import React from 'react'
import styled from 'styled-components'
import {products } from '../../data';
import FlashCards from './FlashCards';
import "./styles.css"

const FlashDeals = ({}) => {
  return (
    <div>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <h1>Flash Deals</h1>
          </div>
          <FlashCards products={products} />
        </div>
      </section>
    </div>
  )
}

export default FlashDeals