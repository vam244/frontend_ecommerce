import React from "react"
import "./Header.css"
import Search from "./Search"


const Header = ({ setsearch_product ,userData}) => {
  return (
    <>
      
      <Search setsearch_product ={setsearch_product } userData={userData} />
      
    </>
  )
}

export default Header
