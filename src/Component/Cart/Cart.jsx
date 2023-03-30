import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Cart.css'
const Cart = (props) => {
    console.log(props)
    const {img,name,seller,quantity,price,ratings}=props.product;
 
    const handleAddToCard=props.handleAddToCard;

    return (
        <div className='product'>
        <img src={img}/>
        <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating:{ratings} Stars</p>
        
        </div>
        <button onClick={()=>handleAddToCard(props.product)} className='btn-cart'>Add to Card
        <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        </div>
    );
};

export default Cart;