import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './Product.css'; // Import the CSS file

function ProductPage({ product, setCurr_product, addToCart }) {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    const Loading = () => (
        <div className="loading-container">
            Loading...
        </div>
    );

    const ShowDetails = () => (
        <div className="product-details-container">

            <div className="back-button-container">
                <NavLink className="back-button" to="/">
                    <button onClick={() => setCurr_product(null)}>
                        <i className="fa fa-long-arrow-left"></i><span>&nbsp;Back</span>
                    </button>
                </NavLink>
            </div>

            <div className="product-details">

                <div className="product-images">
                    <img id="main-image" alt="product" src={product.img} width="250" />
                </div>

                <div className="product-info">
                    <div className="product-header">
                        <h5 className="product-name">{product.name}</h5>
                        <div className="category-label"><p>{product.description}</p></div>
                        <div className="product-price-container">
                            <br/>
                            <big className="product-price"><b>PRICE: ${product.price}</b></big>
                        <p className="product-discount">DISCOUNT: {product.discount}%</p>
                        </div>
                    </div>

                    <div className="cart-actions">
                        <button className="btn btn-outline-dark" onClick={() => addToCart(product)}>add to cart</button>
                    </div>

                </div>

            </div>

        </div>
    );

    return (
        <div className="product-page-container">
            {loading ? <Loading /> : <ShowDetails />}
        </div>
    );
}

export default ProductPage;
