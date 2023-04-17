import React from "react";
import "../styles/Lite3.scss";

const Lite3 = () => {

    return(
       <div className="Lite3">
        <div className="image-product">
            <img src="https://home.ripley.com.pe/Attachment/WOP_5/2084294167500/2084294167500_2.jpg" alt="" />
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

export default Lite3;