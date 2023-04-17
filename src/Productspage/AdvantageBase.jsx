import React from "react";
import "../styles/AdvantageBase.scss";

const AdvantageBase = () => {

    return(
       <div className="AdvantageBase">
        <div className="image-product">
            <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/196627cbe19d4462b88caa4300b20320_9366/Zapatillas_Advantage_Base_Blanco_EE7690_01_standard.jpg" alt="" />
        </div>
        <section className="info">
            <h1>Reebok Vector Runner</h1>
            <p>Precio : S/160   
               <br />
               <br />
               Tallas disponibles:
            </p>
            <div className="sizes" >
                <button>9</button>
            </div>
        </section>
       </div>
    )
}

export default AdvantageBase;