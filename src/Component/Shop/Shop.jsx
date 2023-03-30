import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Shop.css'
const Shop = () => {
  const [products,setProduct]=useState([]);
  const [cart,setCart]=useState([])

  useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProduct(data))
  },[])
  const handleAddToCard=(product)=>{
   const newCart=[...cart,product];
   setCart(newCart);
}
    return (
        <div>
            <div className="shop-container">
             <div className="products-container">
            
            {
               products.map(product=><Cart
               key={product.id}
               product={product}
               handleAddToCard={handleAddToCard}
               ></Cart>) 

            }
            </div>  
             <div className="product-total-impormation">
              <h4>Order summary</h4>
              <p>Selected item:{cart.length}</p>
             </div>
            </div>
        </div>
    );
};

export default Shop;