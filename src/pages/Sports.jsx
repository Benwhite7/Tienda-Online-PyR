import React from "react";
import Sportproducts from "../containers/SportsProducts";
import "../styles/Sports.scss"

const products = [
    {
        id: "3",
        title: "Puma Tacto II TT",
        price: 150,
        image: "https://oechsle.vteximg.com.br/arquivos/ids/13629842-1000-1000/2279035_7.jpg?v=638104411543770000",
        description: "Chimpunes Puma hechos de un textil comodo y amoldablea tus pies , te brindaran mejor pegada"
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
        title: "Puma Rapido III TT",
        price: 150,
        image: "https://falabella.scene7.com/is/image/FalabellaPE/18180335_1",
        description: "Chimpunes Puma hechos de un textil comodo y amoldablea tus pies , te brindaran mejor pegada"
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