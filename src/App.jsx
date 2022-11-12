import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link, 
  Navigate
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import Register from "./pages/Register";
import Account from "./pages/Account";
import "./App.css"
import Product from "./pages/Product";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Blog from "./pages/Blog";
import { BlogDetails } from "./pages/BlogDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";


const App = () => {

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(cartItem.map((item) => (
        item.id === product.id ? {
          ...productExit, qty: productExit.qty + 1
        } : item
      )))
    }
  }

  // user ? <Link to="/" /> : 
  const user = useSelector((state) => state.user.currentUser);

  return (
   
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      <Route path="/blog" element={<Blog />} />
      <Route path='/product/:slug' element={<Product />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:category" element={<Catalog />} />
      <Route exact path='/blog/:id' element={<BlogDetails/> } />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />



      <Route path="/success" element={<Success />} />
      <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} /> 
      <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register />} /> 
      <Route path="/myaccount" element={user ? <Navigate to="/myaccount" replace /> : <Login />} />

      </Routes>
  )
};

export default App;



