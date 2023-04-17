import React from "react";
import "../styles/Lite32.scss";

const Lite32 = () => {

    return(
       <div className="Lite32">
        <div className="image-product">
            <img src="https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/2/02_0000209972009_swa.jpg" alt="" />
        </div>
        <section className="info">
            <h1>Reebok Vector Runner</h1>
            <p>Precio : S/160   
               <br />
               <br />
               Tallas disponibles:
            </p>
            <div className="sizes" >
                <button>9.5</button>
            </div>
        </section>
       </div>
    )
}

export default Lite32;