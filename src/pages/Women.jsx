import React from "react";
import Womenproducts from "../containers/Womenproducts";
import '../styles/Women.scss';

const products = [
    {
        id: "11",
        title: "Lite Racer 2.0",
        price: 150,
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/753c277fb4544b8a9474ab5000f52ed6_9366/Zapatillas_Lite_Racer_2.0_Rosado_FW1971_01_standard.jpg",
        description: "Descubre el maximo confort a la hora de caminar y correr , con las adidas Lite Racer 2.0"
    },
    {
        id: "12",
        title: "Puremotion",
        price: 160,
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1914ef0efe54495795d3ad1f01170ff4_9366/Zapatillas_Puremotion_Negro_H00589_01_standard.jpg",
        description: "Descubre la comodidad con las Puremotion , comodidad en cada paso hecho con materiales de excelente calidad"
    },
    {
        id: "13",
        title: "Lite 3.0",
        price: 140,
        image: "https://i.ebayimg.com/images/g/NSgAAOSwoeJhRI2K/s-l1600.jpg",
        description: " Reebok Lite 3.0 zapatilla de excelente calidad y confort , ideal para caminatas largas y el dia a dia"
    }
]

const Women = () => {
    return (
        <section className="main-container">
            <div className="WomenproductList">
                {products.map(product => (
                    <Womenproducts product={product} key={product.id} />
                ))}
            </div>
        </section>
    )
}

export default Women;