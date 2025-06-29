import React from "react";
import logo from "./logo_v.png";
import { Link } from "react-router-dom";
import "./Search.css"; // Import the CSS file

const Search = ({ setSearch_Product, userData }) => {


  return (
    <>
      <section className="search">
          <div className="logo">
            <Link to='/'>
            <i className="fa  icon-circle">home</i>
            </Link>
          </div>
        <div className="container ">
            <input
              type="text"
              placeholder="Search and hit enter..."
              onChange={(e) => setSearch_Product(e.target.value.toLowerCase())}
            />
          <div className="icon f_flex width">
            {!localStorage.getItem("token") ? (
              <Link to="/login">
                <i className="fa fa-user icon-circle"></i>
              </Link>
            ) : (
              <Link to="/login">
              <i className="fa  icon-circle">{userData.username}</i>
              </Link>
            )}
            <Link to="/cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;

