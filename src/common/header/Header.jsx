import React from "react"
import "./Header.css"
// import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ setsearch_product ,userData}) => {
  return (
    <>
      {/* <Head /> */}
      <Search setsearch_product ={setsearch_product } userData={userData} />
      <Navbar />
    </>
  )
}

export default Header
