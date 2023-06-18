import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ setsearch_product }) => {
  return (
    <>
      {/* <Head /> */}
      <Search setsearch_product ={setsearch_product } />
      <Navbar />
    </>
  )
}

export default Header
