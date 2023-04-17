import React from "react";
import "../styles/Literacer3.scss";

const Literacer3 = () => {

    return(
       <div className="LiteRacer3">
        <div className="image-product">
            <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/faa7b5f9ea7c4ecc8d08ad4a010e5127_9366/Zapatillas_Lite_Racer_3.0_Plomo_GY3100_01_standard.jpg" alt="" />
        </div>
        <section className="info">
            <h1>Adidas Lite Racer 3.0</h1>
            <p>Precio : S/150   
               <br />
               <br />
               Tallas disponibles:
            </p>
            <div className="sizes" >
                <button>9</button>
                <button>10</button>
            </div>
        </section>
       </div>
    )
}

export default Literacer3;