import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import numberWithCommas from '../../utils/numberWithCommas'
import set from '../../redux/product-modal/productModalSlice'
import { Add, ZoomIn } from '@material-ui/icons'


const ListProductItem = props => {

    const dispatch = useDispatch()


    return (
        <div className="product-card">
            <Link to={`/product/${props.slug}`}>
                <div className="product-card__image">
                    {/* <img src={props.img} alt="" /> */}
                    <img src={props.img02} alt="" />
                </div>
                <h3 className="product-card__name">{props.name}</h3>

                <div className="product-card__desc">
                    <p>{props.desc}</p>
                </div>
            
            <div className="product_card_bottom">
                <div className="product-card__price">
                    ${numberWithCommas(props.price)}
                </div>
                {/* <div className="product-card__btn">
                     <button> <ZoomIn /></button>
                </div> */}
            </div>
            </Link>
        </div>
    )
};

ListProductItem.propTypes = {
    img: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ListProductItem