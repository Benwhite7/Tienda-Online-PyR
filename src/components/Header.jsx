import React, { useState , useContext } from "react";
import "../styles/Header.scss";
import Menu from "../components/Menu";
import MyOrder from "../containers/MyOrder";
import IconMenu from "../assets/icons/icon_menu.svg";
import Logo from "../assets/images/logo.jpeg";
import AppContext from "../context/AppContext";
import ShoppingCart from "../assets/icons/icon_shopping_cart.svg";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders , setToggleOrders ] = useState(false);
    const { initialStates } = useContext(AppContext);
    const state = (initialStates.state)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleToggleOrders = () => {
        setToggleOrders(!toggleOrders)
    }
    return (
        <nav>

            <div className="navbar-left">
                <img src={Logo} alt="logo" className="logo" />

                <ul>
                    <li>
                        <a href="/">Todos</a>
                    </li>
                    <li>
                        <a href="/">Hombre</a>
                    </li>
                    <li>
                        <a href="/">Mujer</a>
                    </li>
                    <li>
                        <a href="/">Deportes</a>
                    </li>
                    <li>
                        <a href="/">Ropa</a>
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
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                    </li>
                </ul>
            </div>
            {toggle && <Menu/>}
            {toggleOrders && <MyOrder/>}
        </nav>
    );
}

export default Header;