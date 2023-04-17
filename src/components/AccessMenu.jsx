import React from "react";
import "../styles/AccessMenu.scss";

const AccessMenu = () => {
    return (
        <div className="Accesos">
            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/men">Hombre</a>
                </li>
                <li>
                    <a href="/women">Mujer</a>
                </li>
                <li>
                    <a href="/sports">Deportes</a>
                </li>
                <li>
                    <a href="/acc">Accesorios</a>
                </li>
                <li>
                    <a href="/company">Nosotros</a>
                </li>
            </ul>
        </div>
    )
}

export default AccessMenu;