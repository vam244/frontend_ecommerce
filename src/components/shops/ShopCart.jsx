//import React, { useState } from "react"

//const ShopCart = ({ addToCart, shopItems }) => {
//  const [count, setCount] = useState(0)
//  const increment = () => {
//    setCount(count + 1)
//  }

//  return (
//    <>
//      {shopItems.map((shopItems) => {
//        return (
//          <div className='product mtop'>
//            <div className='img'>
//              <span className='discount'>{shopItems.discount}% Off</span>
//              <img src={shopItems.cover} alt='' />
//              <div className='product-like'>
//                <label>{count}</label> <br />
//                <i className='fa-regular fa-heart' onClick={increment}></i>
//              </div>
//            </div>
//            <div className='product-details'>
//              <h3>{shopItems.name}</h3>
//              <div className='rate'>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//              </div>
//              <div className='price'>
//                <h4>${shopItems.price}.00 </h4>
//                <button onClick={() => addToCart(shopItems)}>
//                  <i className='fa fa-plus'></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        )
//      })}
//    </>
//  )
//}

//export default ShopCart

import React, { useState } from "react"
import { useEffect } from "react"
import Shopitemlist from './shopitemlist'

const ShopCart = ({search_product}) => {
  const [products,setproducts]=useState([])
  // const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
 
  
  let getproduct=async()=>{
    let response= await fetch('https://bvamsi.pythonanywhere.com/products/',{
      method:'GET'
    })
    let response_info=await response.json()
    // console.log(response_info)
    setproducts(response_info)
    
  }
  
  useEffect(() => {
    // e.preventDefault();
    // Side effect code goes here
    // This code will run after the component is rendered
    getproduct()
    console.log(products)
  }, []);

  

 

  let updateproduct=async(id)=>{
    // const csrfToken = window.CSRF_TOKEN;
    console.log('Handle Change:', products)
    await fetch(`http://127.0.0.1:8000/products/${id}/update`,{
      method:'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 'X-CSRFToken': csrfToken,
      },
      body:JSON.stringify(products[id-1])
      })}

  
  return (
   
    <> 
      {products.map((product) => {
        if ((search_product === product.name.slice(0, search_product.length))&&search_product.length!==""){ return (
        <Shopitemlist key={product.id} setproducts={setproducts} updateproduct={updateproduct} shopItems={product}/>
        )}
else if(search_product.length!==""){
  <Shopitemlist key={product.id} setproducts={setproducts} updateproduct={updateproduct} shopItems={product}/>
}

      })}
    </>
  )
    
    }
export default ShopCart
