import React from "react"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({search_product}) => {
  return (
    <>
      <div className='shop_background'>
        
              <ShopCart search_product={search_product}/>
         
      </div>
    </>
  )
}

export default Shop
