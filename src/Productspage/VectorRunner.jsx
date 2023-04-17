import React from "react";
import "../styles/Vectorrunner.scss";

const VectorRunner = () => {

    return(
       <div className="Vectorrunner">
        <div className="image-product">
            <img src="https://falabella.scene7.com/is/image/FalabellaPE/18891969_1?wid=800&hei=800&qlt=70" alt="" />
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

export default VectorRunner;