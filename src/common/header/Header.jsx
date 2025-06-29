import React from "react"
import "./Header.css"
import Search from "./Search"


const Header = ({ setSearch_Product ,userData}) => {
  return (
    <>
      <div className="Header_area">
      <Search setSearch_Product ={setSearch_Product } userData={userData} />
      </div>
    </>
  )
}

export default Header
