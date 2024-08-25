import React from "react"
import "./Header.css"
import Search from "./Search"


const Header = ({ setsearch_product ,userData}) => {
  return (
    <>
      <div className="Header_area">
      <Search setsearch_product ={setsearch_product } userData={userData} />
      </div>
    </>
  )
}

export default Header
