import React, { useContext } from "react";
import "../styles/MyOrder.scss"
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import flechita from "../assets/icons/flechita.svg";

const MyOrder = () => {
    const { initialStates } = useContext(AppContext);
    const state = (initialStates.state);

    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <aside className="MyOrder">
            <div className="title-container">
                <img src={flechita} alt="arrow" />
                <p className="title">My Order</p>
            </div>
            <div className="my-order-content">
                {state.cart.map((product, index) => (
                    <OrderItem
                        indexValue={index}
                        key={index}
                        product={product}
                    />
                ))}
            </div>
            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>S/{sumTotal()}</p>
            </div>
            <button className="primary-button">
                Checkout
            </button>
        </aside>
    );
}

export default MyOrder; 