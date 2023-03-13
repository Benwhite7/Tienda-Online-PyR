import React, { useContext } from "react";
import Iconclose from "../assets/icons/icon_close.png";
import AppContext from "../context/AppContext";
import SportsProductDetailinfo from "./SportsPdetailinfo";
import "../styles/Sportsproductdetail.scss";


const SportsproductDetail = ({ newState }) => {

    function closebutton() {
        const stateopen = !open;


        newState(stateopen)
    }

    const { initialCard } = useContext(AppContext);
    const cardState = (initialCard.cardState);
    console.log(cardState)

    return (
        <aside className="SportsProductDetail">
            <div onClick={closebutton} className="ProductDetail-close">
                <img src={Iconclose} alt="close" />
            </div>
            {cardState.card.map(product => (
                <SportsProductDetailinfo product={product} key={product.id} />
            ))}
        </aside>
    );
}

export default SportsproductDetail;