import React from "react";
import "../styles/Energylux3.scss";

const Energylux3 = () => {

    return(
       <div className="energylux3">
        <div className="image-product">
            <img src="https://plazavea.vteximg.com.br/arquivos/ids/25663852-1000-1000/image-0.jpg?v=638103643181630000" alt="" />
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

export default Energylux3;