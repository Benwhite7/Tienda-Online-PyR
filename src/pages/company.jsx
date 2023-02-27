import React from "react";
import Logo from "../assets/images/logo.jpeg";
import "../styles/Company.scss";

const Company = () => {
    return (
        <div className="company">
            <img src={Logo} alt="" />
            <div className="description">
                <h2> Compañia procedente de Tingo Maria - Huanuco - Perú , dedicada a la venta de calzado de las grandes marcas como Nike , Adidas , Reebok , Puma , etc ... siendo el
                    calzado excelente , cumpliendo con los diversos estandares de calidad y comodidad , ademas contando con los precios mas bajos del mercado .</h2>
            </div>
        </div>
    )
}

export default Company;