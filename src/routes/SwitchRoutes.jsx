import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home' 
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const Routes = () => {
    return (
        <Routes >
            <Route path='/' exact component={Home} />
            <Route path='/product/:slug' element={<Product />} />
            <Route path="/catalog/:category" element={<Catalog />} />
            <Route path='/cart' component={Cart} />
        </Routes >
    )
}

export default Routes;
