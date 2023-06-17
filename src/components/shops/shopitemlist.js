import React from 'react'
// import { useState } from 'react'
// function getCsrfToken() {
//   const csrfCookie = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)');
//   return csrfCookie ? csrfCookie.pop() : '';
// }
// const csrfToken = getCsrfToken();
function Shopitemlist({shopItems,count,increment,updateproduct,setproducts}) {
 
  // const updateObjectValue = (id, newValue) => {
  //   console.log(id)
  //   console.log(newValue)

  //   setproducts((prevObjects) =>
  //     prevObjects.map((obj) =>{
  //     if (obj.id===id) {
  //       return { ...obj, incart: newValue };
  //     } else {
  //       return obj;
  //     }}
  //     )
  //   );
  // };
// onChange={(e) => { handleChange(e.target.value) }} 
let addToCart=async(product)=>{
await fetch('http://127.0.0.1:8000/cart/create',{
  method:'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body:JSON.stringify(product)
})
}
  return (
    <div className='box' key={shopItems.id}>
      {/* {csrfToken} */}
    <div className='product mtop'>
      <div className='img'>
        <span className='discount'>{shopItems.discount}% Off</span>
        <img src={shopItems.img} alt='' />
      </div>
      <div className='product-details'>
        <h3>{shopItems.name}</h3>
        {/* <h3>{shopItems.incart}</h3> */}

        <div className='rate'>
          <i className='fa fa-star'></i>
          <i className='fa fa-star'></i>
          <i className='fa fa-star'></i>
          <i className='fa fa-star'></i>
          <i className='fa fa-star'></i>
        </div>
        <div className='price'>
          <h4>${shopItems.price}.00 </h4>
          {/* step : 3  
             if hami le button ma click garryo bahne 
            */}
            {/* <input type="checkbox" name="myCheckbox" onChange={(e)=>{updateObjectValue(shopItems.id,e.target.value)}}  value="true"/>  */}
          <button style={{display:'flex', justifyContent:'center'}} onClick={() =>  addToCart(shopItems)}> 
             <i className='fa fa-plus' style={{alignSelf:'center'}}></i> 
        </button>
        </div>
      </div>
    </div>
  </div>
  )
          } 

export default Shopitemlist