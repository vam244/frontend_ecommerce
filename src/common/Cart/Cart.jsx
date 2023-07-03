import React from "react"
import "./style.css"
import PaymentRequest from "./PaymentRequest";
import { useState,useEffect } from "react"

// import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_51NMY7OSE4V31JoTBvuEoLYFbpN68kpt1tPcrF6rEeT94hqDZLAVdNhh8pVvakSfSOZoABoqHtmokAdAvolnHLiTI003URyh8Bz');
const Cart = () => {
  // Stpe: 7   calucate total of items
  const [CartItem, setCartItem] = useState([])
  const [showComponent, setShowComponent] = useState(false);

  let getcart=async()=>{
    let response=await fetch('https://bvamsi.pythonanywhere.com/cart/',{
      method:'GET'
    })
    let data= await response.json()
    setCartItem(data)
    console.log(CartItem)
  }
  let getposition=(id)=>{
   
    console.log(id-CartItem[0].id)
    return id-CartItem[0].id
  }
 let updatecart=async(product)=>{
  console.log('Handle Change cart:', CartItem)
  await fetch(`https://bvamsi.pythonanywhere.com/cart/${product.id}/update`,{
    method:'PUT',
    headers: {
      'Content-Type': 'application/json',
      // 'X-CSRFToken': csrfToken,
    },
    body:JSON.stringify(CartItem[getposition(product.id)])
    })
 }
    
let deleteitem=async(product)=>{
  await fetch(`https://bvamsi.pythonanywhere.com/cart/${product.id}/delete`,{
    method:'DELETE',
    headers:{
      'Content-Type': 'application/json',
    },
    
  })
  setCartItem(CartItem.filter(item=>item.id!==product.id))
}
  
  // Perform any necessary actions here
  useEffect(()=>{
      
        getcart()
        // getcart()
        
    },[])
  //Step 4 :
  const addToCart = (product) => {
    // await updatecart(product)
    
    // const csrfToken = window.CSRF_TOKEN;
    
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)
    // if productExit chai alredy exit in cart then will run fun() => setCartItem
    // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem((prevObjects) =>
      prevObjects.map((obj) =>{
      if (obj.id===product.id) {
        return { ...obj, qty:obj.qty+1 };
      } else {
        return obj;
      }}
      ))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem((prevObjects) =>
      prevObjects.map((obj) =>{
      if (obj.id===product.id) {
        return { ...obj, qty: 1 };
      } else {
        return obj;
      }}
      ))
    }


/////////
      ////////////
  }
  
  // Stpe: 6
  const decreaseQty = (product) => {
    // await updatecart(product)
    // preventdefault()
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)

  
    if (productExit.qty>1) {
    //   setCartItem(CartItem.filter((item) => item.id !== product.id))
    // } else {
      console.log(CartItem)
      setCartItem((prevObjects) =>
      prevObjects.map((obj) =>{
      if (obj.id===product.id) {
        return { ...obj, qty:obj.qty-1 };
      } else {
        return obj;
      }}
      ))
      console.log(CartItem)
    }
    
/////////
 //////////////   
  }

  const handleClick = () => {
    setShowComponent(true);
  };

  
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  // prodcut qty total
  const update_all_products=()=>{
    CartItem.map((product)=>{
        updatecart(product)
    })
    window.location.reload();
  }
  
  return (
    <>
    
    {showComponent &&    
    <PaymentRequest totalPrice={totalPrice} />
    }
    {!showComponent&&
      <section className='cart-items'>
        

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            
            {CartItem.map((item) => {
              const productQty = item.price * item.qty
              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.img} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      Rs{item.price}.00 * {item.qty}
                      <span>Rs{productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart' onClick={() => deleteitem(item)}>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                   
                    <div className='cartControl d_flex' >
                      <button className='incCart' style={{display:'flex', justifyContent:'center'}}   onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus' style={{alignSelf:'center'}} ></i>
                      </button>
                      {/* <button className='incCart' onClick={() => updatecart(item)}>
                        <i className='fa-solid fa-divide'></i>
                      </button> */}
                      <button className='desCart'style={{display:'flex', justifyContent:'center'}} onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus' style={{alignSelf:'center'}}></i>
                      </button>
                      
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price </h4>
              <h4>:</h4>
              <h3>Rs{totalPrice}.00</h3>
            </div>
            <div style={{display:"flex"}}>
            <button style={{marginTop:50,marginRight:"20%",color:'red',fontSize:20,backgroundColor:"pink"}} onClick={update_all_products}>save cart</button>
            <button style={{marginTop:50,color:'red',fontSize:20,backgroundColor:"pink" }} onClick={handleClick} >pay</button>

           
            </div>
          </div>
        {/* </div> */}
      </section>
}
    </>
  )
}

export default Cart
