import { AddOutlined, FavoriteBorder, StarOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { products } from '../data';

const FlashCards = ({ products, addToCart }) => {
    const [count, setcount] = useState(0);
    const increment = () => {
        setcount(count + 1)
    }
    return (
        <>     
            {products.map((products) => {
                    return (
                        <div className='box'>
                            <div className='product mtop'>
                                <div className='IMAGE'>
                                    <img src={products.img} alt='' />
                                    <div className='product-like'>
                                        <label>0</label> <br />
                                        <FavoriteBorder style={{ fontSize: "20px", margin: "10px 3px" }} onClick={increment} />
                                    </div>
                                </div>

                                <div className='product-details'>
                                    <h3>{products.name}</h3>
                                    <div className='rate'>
                                        <StarOutlined style={{ fontSize: "15px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                                        <StarOutlined style={{ fontSize: "15px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                                        <StarOutlined style={{ fontSize: "15px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                                        <StarOutlined style={{ fontSize: "15px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                                        <StarOutlined style={{ fontSize: "15px", color: "#ffcd4e", margin: "10px 0 5px 0" }} />
                                    </div>
                                    <div className='price'>
                                        <h4>${products.price}.00 </h4>
                                        {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                                        <button onClick={() => addToCart(products)} >
                                            <AddOutlined style={{ alignItems: "center", margin: "auto", padding: "auto", justifyContent: "center" }} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>



                    )
                }
                )}
        </>
    )
}

export default FlashCards