import React, { useContext } from "react";
import close from "../assets/icons/icon_close.png";
import AppContext from "../context/AppContext";
import "../styles/OrderItem.scss";

const OrderItem = (props) => {
    const { product, indexValue } = props

    const { initialStates } = useContext(AppContext);
    const removeFromCarts = (initialStates.removeFromCart);

    const handleRemove = (index) => {
        removeFromCarts(index)
    }
    return (
        <div className="OrderItem">
            <figure>
                <img src={product.image} alt="X speedflow" />
            </figure>
            <p>{product.title}</p>
            <p>S/{product.price}</p>
            <img src={close} alt="close" onClick={() => handleRemove(indexValue)} />
        </div>
    );
}

export default OrderItem;
