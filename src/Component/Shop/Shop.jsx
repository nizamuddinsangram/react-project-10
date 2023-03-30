import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Shop.css'
const Shop = () => {
  const [products,setProduct]=useState([]);


  useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProduct(data))
  },[])
    return (
        <div>
            <div className="shop-container">
             <div className="products-container">
            
            {
               products.map(product=><Cart
               key={product.id}
               product={product}
               ></Cart>) 

            }
            </div>  
             <div className="product-total-impormation">
              <h4>Order summary</h4>
             </div>
            </div>
        </div>
    );
};

export default Shop;