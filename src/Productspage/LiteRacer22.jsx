import React from "react";
import "../styles/LiteRacer22.scss";

const LiteRacer22 = () => {

    return(
       <div className="LiteRacer22">
        <div className="image-product">
            <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/e178c6d7d3c0417db657ac3600dfc8de_9366/Zapatillas_Lite_Racer_2.0_Azul_FZ0394_01_standard.jpg" alt="" />
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

export default LiteRacer22;