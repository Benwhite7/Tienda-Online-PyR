import React, { useContext } from "react";
import Iconclose from "../assets/icons/icon_close.png";
import AppContext from "../context/AppContext";
import MenProductDetailinfo from "./MenPdetailinfo";
import "../styles/Menproductdetail.scss";


const MenproductDetail = ({ newState }) => {

    function closebutton() {
        const stateopen = !open;


        newState(stateopen)
    }

    const { initialCard } = useContext(AppContext);
    const cardState = (initialCard.cardState);
    console.log(cardState)

    return (
        <aside className="MenProductDetail">
            <div onClick={closebutton} className="ProductDetail-close">
                <img src={Iconclose} alt="close" />
            </div>
            {cardState.card.map(product => (
                <MenProductDetailinfo product={product} key={product.id} />
            ))}
        </aside>
    );
}

export default MenproductDetail;