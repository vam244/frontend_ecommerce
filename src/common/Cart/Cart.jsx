import React, { useState, useEffect } from "react";
import "./style.css";
import PaymentRequest from "./PaymentRequest";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showPaymentComponent, setShowPaymentComponent] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('https://bvamsi.pythonanywhere.com//cart/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
          }
        });
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [token]);

  const findProductIndex = (id) => {
    return id - cartItems[0].id;
  };

  const updateCartItem = async (product) => {
    try {
      await fetch(`https://bvamsi.pythonanywhere.com//cart/${product.id}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify(cartItems[findProductIndex(product.id)])
      });
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  const deleteCartItem = async (product) => {
    try {
      await fetch(`https://bvamsi.pythonanywhere.com//cart/${product.id}/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      });
      setCartItems(cartItems.filter(item => item.id !== product.id));
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id && item.user === product.user);

    if (existingProduct) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === product.id ? { ...item, qty: 1 } : item
        )
      );
    }
  };

  const decreaseQty = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct.qty > 1) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  const handleShowPayment = () => {
    setShowPaymentComponent(true);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

  const updateAllProducts = () => {
    cartItems.forEach(product => updateCartItem(product));
    window.location.reload();
  };

  return (
    <>
      {showPaymentComponent ? (
        <PaymentRequest totalPrice={totalPrice} />
      ) : (
        <section className="cart-items">
          <div className="cart-details">
            {cartItems.length === 0 ? (
              <h1 className="no-items product">No Items are added in Cart</h1>
            ) : (
              cartItems.map(item => {
                const productQty = item.price * item.qty;
                return (
                  <div className="cart-list product d_flex" key={item.id}>
                    <div className="img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="cart-details">
                      <h3>{item.name}</h3>
                      <h4>
                        Rs{item.price}.00 * {item.qty}  :  Rs{productQty}.00
                      </h4>
                    </div>
                    <div className="cart-items-function">
                      <div className="removeCart">
                        <button className="removeCart" onClick={() => deleteCartItem(item)}>
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                      <div className="cartControl d_flex">
                        <button className="incCart" onClick={() => addToCart(item)}>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                        <button className="desCart" onClick={() => decreaseQty(item)}>
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="cart-total">
            <h2>Cart Summary</h2>
            <div className="d_flex">
              <h4>Total Price </h4>
              <h4>:</h4>
              <h3>Rs{totalPrice}.00</h3>
            </div>
            <div className="cart-total-buttons">
              <button onClick={updateAllProducts}>Save Cart</button>
              <button onClick={handleShowPayment}>Pay</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
