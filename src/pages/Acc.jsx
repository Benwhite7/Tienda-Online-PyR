import React from "react";
import Accproducts from "../containers/Accproducts";
import '../styles/Acc.scss';

const products = [
    {
        id: "15",
        title: "Mochila Camuflaje",
        price: 90,
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6da94c83467441ac8be0ad9a00f83a81_9366/Mochila_Camuflaje_Classic_Multicolor_HC9517_01_standard.jpg",
        description: "Listas para el regreso a clases"
    },
    {
        id: "16",
        title: "Linear Classic",
        price: 80,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ac926a86dc3a436ebf30ada10087702a_9366/Mochila_Linear_Classic_Daily_UNISEX_Azul_HC7235.jpg",
        description: "Muestra tu estilo con las linear classic en este regreso a clases"
    },
    {
        id: "17",
        title: "Adidas Starlancer",
        price: 60,
        image: "http://cdn.shopify.com/s/files/1/0355/7441/5495/products/Starlancer_Club_Ball_White_FS6121_01_standard.jpg?v=1659687355",
        description: " Demuestra tu talento y habilidad con el balon con las starlancer , con camara de butilo y costuras firmes que te brindaran una gran durabilidad"
    },
    {
        id: "18",
        title: "Adidas Sportwear",
        price: 160,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/f7c4a1bff4514fcbb15ead2400ae5b92_9366/Polera_con_Capucha_adidas_Sportswear_Negro_H45369_01_laydown.jpg",
        description: "Polera Adidas Sportwear ideal para caminatas y noches frias"
    },
    {
        id: "19",
        title: "Medias Tobilleras Adidas",
        price: 50,
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d1c1711c63c649f2b48baa2a012375be_9366/Medias_Tobilleras_Acolchadas_6_Pares_Negro_DZ9382_03_standard.jpg",
        description: "Descubre la comodidad con medias tobilleras adidas , comodidad en cada paso hecho con materiales de excelente calidad"
    }
]

const Acc = () => {
    return (
        <section className="main-container">
            <div className="AccproductList">
                {products.map(product => (
                    <Accproducts product={product} key={product.id} />
                ))}
            </div>
        </section>
    )
}

export default Acc;