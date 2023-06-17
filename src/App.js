import React, { useState,useEffect } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Login from "./components/user_login_reg/Login"
import Shop from "./components/shops/Shop"
import Register from "./components/user_login_reg/Register"

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  /*
  step1 :  const { productItems } = Data 
  lai pass garne using props
  
  Step 2 : item lai cart ma halne using useState
  ==> CartItem lai pass garre using props from  <Cart CartItem={CartItem} /> ani import garrxa in cartItem ma
 
  Step 3 :  chai flashCard ma xa button ma

  Step 4 :  addToCart lai chai pass garne using props in pages and cart components
  */

  //Step 1 :
  const { productItems } = Data
 
  // const { shopItems } = Sdata
// 
  //Step 2 :
useEffect(()=>{

    
    if(localStorage.getItem('token')){
      setIsLoggedIn(true);
      console.log('hi')
    }
  
},[])
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/login' exact>
          {
        currentForm === "login" ? <Login setIsLoggedIn={setIsLoggedIn} onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
          </Route>
          <Route path='/' exact>
            {/* ignore productitems  */}
            <Shop/>
          </Route>
          <Route path='/cart' exact>
          {/* {
          if(isLoggedIn){
            <Cart/>}
            else{ <div style={{margin:30 }}> please login to view the cart</div>
          }} */}
            {isLoggedIn&&<Cart/>||<div style={{margin:30 }}> please login to view the cart</div>}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
