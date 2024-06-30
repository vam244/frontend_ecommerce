import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Login from "./components/user_login_reg/Login";
import Shop from "./components/shops/Shop";
import Product_page from "./components/shops/Product_page";
import Register from "./components/user_login_reg/Register";
import "./App.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
// import { useNavigate } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [userData, setUserData] = useState({});
  const token = localStorage.getItem('token');
  // const navigate = useNavigate(); // Get the navigate function from useNavigate

  const getUserByToken = async () => {
    try {
      const response = await fetch('https://bvamsi.pythonanywhere.com/current_user/', {
        method: 'GET',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else if (response.status === 401) {
        console.error('Failed to fetch user data:', response.status);

        localStorage.removeItem('token');
        setIsLoggedIn(false);

        // Redirect('/login'); // Redirect to login page
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      getUserByToken();
    }
  }, [token]); // Adding token as a dependency to useEffect

  return (
    <>
      <Router>
        <Header setSearchProduct={setSearchProduct} userData={userData} />
        <Switch>
          <Route path='/login' exact>
            {currentForm === "login" ? (
              <Login setIsLoggedIn={setIsLoggedIn} onFormSwitch={toggleForm} userData={userData} />
            ) : (
              <Register onFormSwitch={toggleForm} />
            )}
          </Route>
          <Route path='/' exact>
            <Shop searchProduct={searchProduct} />
          </Route>
          <Route path='/Product_page'>
            <Product_page />
          </Route>
          <Route path='/cart' exact>
            {isLoggedIn ? (
              <Cart />
            ) : (
              <div style={{ margin: 30 }}>Please login to view the cart</div>
            )}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
