import React from "react";
import Menproducts from "../containers/Menproducts";
import '../styles/Men.scss';

const products = [
    {
        id: "1",
        title: "Lite Racer 3.0",
        price: 160,
        image: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/faa7b5f9ea7c4ecc8d08ad4a010e5127_9366/Zapatillas_Lite_Racer_3.0_Plomo_GY3100_01_standard.jpg",
        description: "Descubre el maximo confort a la hora de caminar y correr , con las adidas Lite Racer 3.0",
        enlace: "literacer3"
    },
    {
        id: "2",
        title: "Lite Racer 2.0",
        price: 150,
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d62d82fa1980400bba39aaea00ee12c3_9366/Zapatillas_Lite_Racer_2.0_Negro_EG3283_01_standard.jpg",
        description: "Descubre la comodidad con las Lite Racer 2.0 , comodidad en cada paso hecho con materiales de excelente calidad"
    },
    {
        id: "4",
        title: "Vector Runner",
        price: 190,
        image: "https://falabella.scene7.com/is/image/FalabellaPE/18891969_1?wid=800&hei=800&qlt=70",
        description: " Reebok vector runner zapatilla de excelente calidad y confort , ideal para caminatas largas y el dia a dia"
    },
    {
        id: "5",
        title: "Energylux 3",
        price: 160,
        image: "https://plazavea.vteximg.com.br/arquivos/ids/25663852-1000-1000/image-0.jpg?v=638103643181630000",
        description: "Zapatilla hecha de materiales reciclados que es ecoamigable , indispensable para el dia a dia ."
    },
    {
        id: "6",
        title: "Lite Racer 2.0",
        price: 160,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e178c6d7d3c0417db657ac3600dfc8de_9366/Zapatillas_Lite_Racer_2.0_Azul_FZ0394_01_standard.jpg",
        description: "Descubre la comodidad con las Lite Racer 2.0 , comodidad en cada paso hecho con materiales de excelente calidad"
    },
    {
        id: "8",
        title: "Advantage Base",
        price: 170,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/196627cbe19d4462b88caa4300b20320_9366/Zapatillas_Advantage_Base_Blanco_EE7690_01_standard.jpg",
        description: "Luce tu estilo con las Advantage , zapatillas urbanas que combinan con todo tipo de estilos , idelas para caminatas callejeras"
    },
    {
        id: "9",
        title: "Lite 3",
        price: 160,
        image: "https://home.ripley.com.pe/Attachment/WOP_5/2084294167500/2084294167500_2.jpg",
        description: "Luce un calzado cómodo, moderno y resistente gracias a Reebok ,la suela ligera te brinda amortiguación premium desde el primer paso. "
    },
    {
        id: "10",
        title: "Lite 3",
        price: 160,
        image: "https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/2/02_0000209972009_swa.jpg",
        description: "Luce un calzado cómodo, moderno y resistente gracias a Reebok ,la suela ligera te brinda amortiguación premium desde el primer paso. "
    }
]

const Men = () => {
    return (
        <section className="main-container">
            <div className="MenproductList">
                {products.map(product => (
                    <Menproducts product={product} key={product.id} />
                ))}
            </div>
        </section>
    )
}

export default Men;