import React, { useState } from "react"
import logo from "./logo_v.png"
import { Link } from "react-router-dom"

const Search = ({setsearch_product,userData }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
 
 

  
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} style={{width:50}} alt='' />
          </div>

          <div className='search-box f_flex'style={{width:"50%",marginRight:60}}>
            <input  type='text' placeholder='Search and hit enter...'onChange={(e) => setsearch_product(e.target.value)} /> 
             {/* <i className='fa fa-lens'></i> */}
            {/* <i className='fa fa-search' ></i> */}
          </div>

          <div className='icon f_flex width'>
          
            { !localStorage.getItem('token')? <Link to='/login'><i className='fa fa-user icon-circle'></i></Link> :<Link to='/login'><button style={{fontSize:"1rem"}}>{userData.username}|(logout)</button></Link>}
            {/* <div className='cart'> */}
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              </Link>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
