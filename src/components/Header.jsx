import React, { useState, useContext } from "react";
import Menu from "../components/Menu";
import MyOrder from "../containers/MyOrder";
import IconMenu from "../assets/icons/icon_menu.svg";
import Logo from "../assets/images/Logo.jpeg";
import AppContext from "../context/AppContext";
import ShoppingCart from "../assets/icons/icon_shopping_cart.svg";
import AccessMenu from "./AccessMenu";
import "../styles/Header.scss";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [Amenu, setAMenu] = useState(false);
    const { initialStates } = useContext(AppContext);
    const state = (initialStates.state)
    //Abrir cuenta
    const handleToggle = () => {
        setToggle(!toggle)
    }
    //Abrir carrito
    const handleToggleOrders = () => {
        setToggleOrders(!toggleOrders)
    }
    //Abrir Accesos mobile
    const handleToggleM = () => {
        setAMenu(!Amenu)
    }
    return (
        <nav>
            {Amenu && <AccessMenu />}
            <div className="navbar-left">
                <a href="/company">
                    <img src={Logo} alt="logo" className="logo" />
                </a>
                <img onClick={handleToggleM} src={IconMenu} alt="" className="access" />
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

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        P&RSport@gmail.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
                        <img src={ShoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </nav>
    );
}

export default Header;