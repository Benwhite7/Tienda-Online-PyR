import React from "react";
import AddTocart from "../assets/icons/bt_add_to_cart.svg";
import "../styles/ProductInfo.scss";

const ProductInfo = ({ product }) => {
    return (
        <>
            <img src={product.image} alt="Lite Racer 2.0" />
            <div className="product-inf">
                <p>S/{product.price}</p>
                <p>{product.title}</p>
                <p>{product.description}
                </p>
                <button className="primary-button add-to-cart-button">
                    <img src={AddTocart} alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </>
    );
}

export default ProductInfo;