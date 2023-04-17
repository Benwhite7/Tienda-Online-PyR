import React from "react";
import "../styles/Literacer2.scss";

const Literacer2 = () => {

    return(
       <div className="LiteRacer2">
        <div className="image-product">
            <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d62d82fa1980400bba39aaea00ee12c3_9366/Zapatillas_Lite_Racer_2.0_Negro_EG3283_01_standard.jpg" alt="" />
        </div>
        <section className="info">
            <h1>Adidas Lite Racer 2.0</h1>
            <p>Precio : S/140   
               <br />
               <br />
               Tallas disponibles:
            </p>
            <div className="sizes" >
                <button>10</button>
            </div>
        </section>
       </div>
    )
}

export default Literacer2;