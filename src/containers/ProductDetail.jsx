import React , {useContext} from "react";
import ProductInfo from "../components/ProductInfo";
import Iconclose from "../assets/icons/icon_close.png";
import AppContext from "../context/AppContext";
import "../styles/ProductDetail.scss";

const ProductDetail = ({newState}) => {
   
   function closebutton() {
    const stateopen = !open;
    

    newState(stateopen)
} 

    const { initialCard } = useContext(AppContext);
    const cardState = (initialCard.cardState);
    console.log(cardState)

    return (
        <aside className="ProductDetail">
            <div onClick={closebutton} className="ProductDetail-close">
                <img src={Iconclose} alt="close" />
            </div>
            {cardState.card.map(product => (
                    <ProductInfo product={product} key={product.id} />
                ))}
        </aside>
    );
}

export default ProductDetail; 