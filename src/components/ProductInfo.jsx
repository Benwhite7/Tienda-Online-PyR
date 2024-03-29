import React , { useContext } from "react";
import AppContext from "../context/AppContext";
import AddTocart from "../assets/icons/bt_add_to_cart.png";
import "../styles/ProductInfo.scss";

const ProductInfo = ({ product }) => {

    const { initialStates } = useContext(AppContext);
    const addToCartS = (initialStates.addToCart);
    
    const handleClick = item => {
        addToCartS(item);
      };

    return (
        <>
            <img src={product.image} alt="Lite Racer 2.0" />
            <div className="product-inf">
                <p>S/{product.price}</p>
                <p>{product.title}</p>
                <p>{product.description}
                </p>
                <button onClick={() => handleClick(product)} className="primary-button add-to-cart-button">
                    <img  src={AddTocart} alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </>
    );
}

export default ProductInfo;