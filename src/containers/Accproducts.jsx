import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import addToCartImage from "../assets/icons/bt_add_to_cart.png";
import info from "../assets/images/info7.png";
import Accproductdetail from "../components/Accproductdetail"
import "../styles/Accproducts.scss";

const Accproducts = ({ product }) => {
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
        addtoCardStates(item)
    };

    return (
        <div className="AccproductItem">
            {open && <Accproductdetail newState={newState} />}
            <img src={product.image} alt={product.title} />
            <div className="accproduct-info">
                <div>
                    <p>S/{product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={openDetails}>
                    <img onClick={() => addwiththeclick(product)} src={info} alt="icono" />
                </figure>
                <figure onClick={() => handleClick(product)} >
                    <img src={addToCartImage} alt="" />
                </figure>

            </div>

        </div>
    )
}

export default Accproducts;