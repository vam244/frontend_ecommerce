import React from "react"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({search_product}) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          {/* <Catg /> */}

          <div className='contentWidth'>
            <div className='product-content  grid1'>
              <ShopCart search_product={search_product}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
