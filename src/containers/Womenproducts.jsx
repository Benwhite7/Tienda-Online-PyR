import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import addToCartImage from "../assets/icons/bt_add_to_cart.png";
import "../styles/Womenproducts.scss";

const Womenproducts = ({ product }) => {

    const { initialStates } = useContext(AppContext);
    const addToCartS = (initialStates.addToCart);

    const handleClick = item => {
        addToCartS(item);
    };

    return (
        <div className="WomenproductItem">

            <img src={product.image} alt={product.title} />
            <div className="Womenproduct-info">
                <div>
                    <p>S/{product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)} >
                    <img src={addToCartImage} alt="" />
                </figure>

            </div>

        </div>
    )
}

export default Womenproducts;