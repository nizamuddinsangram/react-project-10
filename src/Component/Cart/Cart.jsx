import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.product)
    const {img,name,seller,quantity,price,ratings}=props.product;
    return (
        <div className='product'>
        <img src={img}/>
        <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating:{ratings} Stars</p>
        
        </div>
        <button className='btn-cart'>Add to Card</button>
        </div>
    );
};

export default Cart;