import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import addToCartImage from "../assets/icons/bt_add_to_cart.png"
import "../styles/Menproducts.scss";

const Menproducts = ({ product }) => {
    const [open, setOpen] = useState(false);

    const openDetails = () => {
        setOpen(!open)
    };
    //

    function newState(open) {
        setOpen(open)
    };

    //
    const { initialStates } = useContext(AppContext);
    const addToCartS = (initialStates.addToCart);

    const handleClick = item => {
        addToCartS(item);
    };
    //
    const { initialCard } = useContext(AppContext);
    const addtoCardStates = (initialCard.addToCardState);

    const addwiththeclick = item => {
        addtoCardStates(item);
    };
    //

    return (
        <div className="MenproductItem">
            {open && <Menproductdetail newState={newState} />}
            <a href="/literacer3">
            <img src={product.image} alt={product.title} />
            </a>
            <div className="menproduct-info" >
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

export default Menproducts;