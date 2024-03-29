import React, { useContext } from "react";
import Iconclose from "../assets/icons/icon_close.png";
import AppContext from "../context/AppContext";
import AccProductDetailinfo from "./AccPdetailinfo";
import "../styles/Accproductdetail.scss";


const AccproductDetail = ({ newState }) => {

    function closebutton() {
        const stateopen = !open;
        newState(stateopen)
    }

    const { initialCard } = useContext(AppContext);
    const cardState = (initialCard.cardState);
    console.log(cardState)

    return (
        <div className="GlassDetail">
            <aside className="AccProductDetail">
                <div onClick={closebutton} className="ProductDetail-close-acc">
                    <img src={Iconclose} alt="close" />
                </div>
                {cardState.card.map(product => (
                    <AccProductDetailinfo product={product} key={product.id} />
                ))}
            </aside>
        </div>
    );
}

export default AccproductDetail;