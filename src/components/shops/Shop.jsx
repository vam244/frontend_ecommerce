import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = () => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          {/* <Catg /> */}

          <div className='contentWidth'>
            <div className='product-content  grid1'>
              <ShopCart/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
