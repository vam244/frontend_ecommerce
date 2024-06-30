import React from 'react';
import './Shopitem.css'; // Import the CSS file

function Shopitemlist({ shopItems, setCurr_product, addToCart }) {
  return (
    <div className='box' key={shopItems.id}>
      <div className='product '>
        <div className='img' >
          <span className='discount'>{shopItems.discount}% Off</span>
          <img src={shopItems.img} alt={shopItems.name}></img>
        </div>

          <div className='product-details' >
            <div>
            <h3>{shopItems.name}</h3>
            <h4>Rs{shopItems.price}.00</h4>
            </div>
            <div className='price'>
              <button onClick={() => addToCart(shopItems)}>Cart</button>
              <button onClick={() => setCurr_product(shopItems)}>View</button>
            </div>
          </div>

        {/* </div> */}
      </div>
    </div>
  );
}

export default Shopitemlist;
