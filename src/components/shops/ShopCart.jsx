import React, { useState, useEffect } from "react";
import Shopitemlist from './shopitemlist';
import Product_page from './Product_page';
import './Shop_cart.css';

const ShopCart = ({ search_product }) => {
  const [products, setProducts] = useState([]);
  const [curr_product, setCurr_product] = useState(null);
  const token = localStorage.getItem('token');

  const getproduct = async () => {
    let response = await fetch('http://127.0.0.1:8000/products/', {
      method: 'GET'
    });
    let response_info = await response.json();
    setProducts(response_info);
  };

  let addToCart=async(product)=>{
    let response= await fetch('http://127.0.0.1:8000/cart/create',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body:JSON.stringify(product)
    })
    if(response.ok)alert("product added succesfully")
    }

  useEffect(() => {
    getproduct();
  }, []);
  
  return (
    <div className="mainarea" >
      {curr_product ? (
        <Product_page  product={curr_product} setCurr_product={setCurr_product} addToCart={addToCart}/>
      ) : (
        products.map((product) => {
          if (search_product && product.name.slice(0, search_product.length) === search_product) {
            return (
              <Shopitemlist key={product.id} shopItems={product} setCurr_product={setCurr_product} addToCart={addToCart}/>
            );
          } else if (!search_product) {
            return (
              <Shopitemlist key={product.id} shopItems={product} setCurr_product={setCurr_product} addToCart={addToCart}/>
            );
          }
          console.log(curr_product)
          return null;
        })
      )}
    </div>
  );
};

export default ShopCart;
