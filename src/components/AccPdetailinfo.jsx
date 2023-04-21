import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import AddTocart from "../assets/icons/bt_add_to_cart.png";
import "../styles/AccProductDetailinfo.scss";

const AccProductDetailinfo = ({ product }) => {

    const { initialStates } = useContext(AppContext);
    const addToCartS = (initialStates.addToCart);

    const handleClick = item => {
        addToCartS(item);
    };

    return (
        <>
            <img src={product.image} alt="Lite Racer 2.0" />
            <div className="Accproduct-inf">
                <p>S/{product.price}</p>
                <p>{product.title}</p>
                <p>{product.description}
                </p>
                <p>
                    Tallas disponibles:
                </p>
                <div className="sizesacc" >
                    <button>{product.sizes}</button>
                </div>
                <button onClick={() => handleClick(product)} className="primary-button-acc add-to-cart-button">
                    <img src={AddTocart} alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </>
    );
}

export default AccProductDetailinfo;