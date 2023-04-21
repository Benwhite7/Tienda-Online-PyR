import React from "react";
import Accproducts from "../containers/Accproducts";
import '../styles/Acc.scss';

const products = [
    {
        id: "16",
        title: "Linear Classic",
        price: 80,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ac926a86dc3a436ebf30ada10087702a_9366/Mochila_Linear_Classic_Daily_UNISEX_Azul_HC7235.jpg",
        description: "Muestra tu estilo con las linear classic en este regreso a clases",
        sizes : "TU",
    },
    {
        id: "15",
        title: "Adidas Club UCL Estambul",
        price: 70,
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/141576b0bc36453581a0af5e00a5911f_9366/Pelota_Club_Estambul_UCL_Plateado_HZ6928_01_standard.jpg",
        description: "Demuestra tu habilidad y destreza con los balones Adidas UCL",
        sizes: 5,
    },
    {
        id: "17",
        title: "Adidas Starlancer",
        price: 60,
        image: "http://cdn.shopify.com/s/files/1/0355/7441/5495/products/Starlancer_Club_Ball_White_FS6121_01_standard.jpg?v=1659687355",
        description: " Demuestra tu talento y habilidad con el balon con las starlancer , con camara de butilo y costuras firmes que te brindaran una gran durabilidad",
        sizes: 5,
    },
    {
        id: "27",
        title: "Adidas Messi Club",
        price: 50,
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0406b1f4a7604454bc15ae68011dfcb2_9366/Pelota_Messi_Club_Blanco_HE3814_01_standard.jpg",
        description: " Demuestra tu talento y habilidad con el balon Adidas Messi Club , con camara de butilo y costuras firmes que te brindaran una gran durabilidad",
        sizes: 5,
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
        title: "Adidas UCL club Void",
        price: 50,
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1ad8ec85cddc4b53aedeae6801278f64_9366/Pelota_UCL_Club_Void_Blanco_HI2177_01_standard.jpg",
        description: "Demuestra tu habilidad y destreza con los balones Adidas UCL",
        sizes: 5,
    },
    {
        id: "28",
        title: "Adidas Starlancer",
        price: 50,
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e0ed8a1a4fad49cd83dfae68011dcb50_9366/Pelota_Starlancer_Club_Blanco_HE3813_01_standard.jpg",
        description: " Demuestra tu talento y habilidad con el balon con las starlancer , con camara de butilo y costuras firmes que te brindaran una gran durabilidad",
        sizes: 5,
    },
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