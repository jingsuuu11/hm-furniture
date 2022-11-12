import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Add, Remove, StarOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {publicRequest} from "../../requestMethod"
import { addProduct } from '../../redux/cartRedux'
import { addItem } from '../../redux/cartItemSlice'
import { remove } from '../../redux/product-modal/productModalSlice'
import { Link, useLocation } from 'react-router-dom'

const ProductView = props => {

    // const [products, setProducts] = useState({});

    let product = props.product    
    
    if (product === undefined) product = {
        name: "",
        price: '',
        img: null,
        img02: null,
        categorySlug: "",
        colors: [],
        slug: "",
        description: ""
    }

    const [previewImg, setPreviewImg] = useState(product.img)

    // const [color, setColor] = useState(undefined)

    // const [quantity, setQuantity] = useState(1)

    // const updateQuantity = (type) => {
    //     if (type === 'plus') {
    //         setQuantity(quantity + 1)
    //     } else {
    //         setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    //     }
    // }

    // const check = () => {
    //     if (color === undefined) {
    //         alert('Please choose color!')
    //         return false
    //     }
    //     return true
    // }

    // const addToCart = () => {
    //     if (check()) {
    //         let newItem = {
    //             slug: product.slug,
    //             color: color,
    //             price: product.price,
    //             quantity: quantity
    //         }
    //         if (dispatch(addItem(newItem))) {
    //             alert('Success')
    //         } else {
    //             alert('Fail')
    //         }
    //     }
    // }



    // const goToCart = () => {
    //     if (check()) {
    //         let newItem = {
    //             slug: product.slug,
    //             color: color,
    //             price: product.price,
    //             quantity: quantity
    //         }
    //         if (dispatch(addItem(newItem))) {
    //             dispatch(remove())
    //             props.history.push('/cart')
    //         } else {
    //             alert('Fail')
    //         }
    //     }
    // }

    // useEffect(() => {
    //   setPreviewImg(product.img)
    //   setQuantity(1)
    //   setColor(undefined)
    // }, [product])

    // useEffect(() => {
    //     const getProduct = async () => {
    //         try {
    //             const res = await publicRequest.get("/products/find/" + product);
    //             setProducts(res.data);
    //         } catch { }
    //     };
    //     getProduct();
    // }, [product]);

    const [products, setProducts] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const getProduct = async () => {
    //         try {
    //             const res = await publicRequest.get("/product + slug");
    //             setProducts(res.data);
    //         } catch { }
    //     };
    //     getProduct();
    // }, [slug]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        dispatch(
            addProduct({ ...product, quantity, color })
        );
    };

    

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.img)}>
                        <img src={product.img} alt="" />
                    </div>
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.img02)}>
                        <img src={product.img02} alt="" />
                    </div>
                </div>

                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>

                <div className="product-description" >
                    <div className="product-description__title">
                        <h1>Product Description</h1>
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{ __html: product.description }}>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">{product.name}</h1>
                <span className="product__info__item__brief">
                    {product.brief}
                </span>

                <div className="product__info__item_rate">
                    <div className='rate'>
                        <StarOutlined style={{ fontSize: "25px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                        <StarOutlined style={{ fontSize: "25px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                        <StarOutlined style={{ fontSize: "25px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                        <StarOutlined style={{ fontSize: "25px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                        <StarOutlined style={{ fontSize: "25px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                    </div>

                    <div className='link'>
                        <a href="./review">70 reviews</a>
                    </div>
                </div>

                <div className="product__info__item__pricediv">
                    <span className="product__info__item__price">
                        {product.price}
                    </span>                    
                </div>

                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Color
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.colors.map((color) => (
                                <button color = {color} className='productColorCircle' style={{ backgroundColor: color }} onClick={() => setColor(color)} key={color}>                      
                                </button>
                            ))
                        }
                    
                    </div>
                </div>

                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Quantity
                    </div>
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => handleQuantity("dec")}>
                            <Remove />
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div className="product__info__item__quantity__btn" onClick={() => handleQuantity("inc")} >
                            <Add />
                        </div>
                    </div>
                </div>

                <div className="product__info__item_button"> 
                    <button type="button" onClick={handleClick}> ADD TO CART</button>
                    <button type="button" > GO TO CART</button> 
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = { products: PropTypes.object }

export default ProductView