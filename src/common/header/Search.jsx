import React from "react";
import logo from "./logo_v.png";
import { Link } from "react-router-dom";
import "./Search.css"; // Import the CSS file

const Search = ({ setsearch_product, userData }) => {
  // fixed Header
  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".search");
  //   search.classList.toggle("active", window.scrollY > 100);
  // });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <input
              type="text"
              placeholder="Search and hit enter..."
              onChange={(e) => setsearch_product(e.target.value)}
            />
          </div>

          <div className="icon f_flex width">
            {!localStorage.getItem("token") ? (
              <Link to="/login">
                <i className="fa fa-user icon-circle"></i>
              </Link>
            ) : (
              <Link to="/login">
                <button>{userData.username}</button>
              </Link>
            )}
            <Link to="/cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
            </Link>
          </div>
        </div>
      </section>
      <Link to='/' >Home</Link>
    </>
  );
};

export default Search;

