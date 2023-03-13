import React from "react";
import Sportproducts from "../containers/SportsProducts";
import "../styles/Sports.scss"

const products = [
    {
        id: "3",
        title: "Predator Edge.3 Fg",
        price: 250,
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e0cfbff6be164a2f9b83ae9e00ec2522_9366/Chimpunes_Predator_Edge.3_Terreno_Firme_Naranja_GW1005_01_standard_hover.jpg",
        description: "El silo Predator uno de los mas iconicos en Adidas ; botas armadas de pequeñas incrustaciones de goma , hechas para dar la mayor rosca posible a la hora de patear"
    },
    {
        id: "7",
        title: "Goletto VIII Tf",
        price: 180,
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dd37a2eff67149449f77ad79007a3251_9366/Chimpunes_Goletto_VIII_Pasto_Sintetico_Negro_GY5775_01_standard.jpg",
        description: "Las goletto , zapatillas guerreras de maxima durabilidad , hechas para que des el maximo rendimiento en campos sinteticos y naturales"
    },
    {
        id: "14",
        title: "Predator Edge.3 Low Fg",
        price: 250,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/117dcff8c7744d638044ae9e00e72ec2_9366/Chimpunes_Predator_Edge.3_Low_Terreno_Firme_Naranja_GW0994_01_standard_hover.jpg",
        description: "El silo Predator uno de los mas iconicos en Adidas ; botas armadas de pequeñas incrustaciones de goma , hechas para dar la mayor rosca posible a la hora de patear"
    }
]

const Sports = () => {
    return (
        <section className="main-container">
            <div className="SportproductList">
                {products.map(product => (
                    <Sportproducts product={product} key={product.id} />
                ))}
            </div>
        </section>
    )
}

export default Sports;