import React, { useState, useContext,useEffect } from "react";
import './Navbar.css';
import logo from '../Assets/logo_icon.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const [menu, setMenu] = useState();
    const {getTotalCartItems}=useContext(ShopContext);
    const location = useLocation();

     // Sincroniza el estado `menu` con la ruta actual
    useEffect(() => {
        if (location.pathname.includes("mens")) {
            setMenu("mens");
        } else if (location.pathname.includes("womens")) {
            setMenu("womens");
        } else if (location.pathname.includes("kids")) {
            setMenu("kids");
        } else {
            setMenu("shop");
        }
    }, [location.pathname]);
    
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>MIX SHOES</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }} className={menu === "shop" ? "selected" : ""}>
                    <Link to='http://localhost:3000/'>SHOP</Link>{menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("mens") }} className={menu === "mens" ? "selected" : ""}>
                    <Link to='http://localhost:3001/mens'>MEN'S</Link>{menu === "mens" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("womens") }} className={menu === "womens" ? "selected" : ""}>
                    <Link to='http://localhost:3002/womens'>WOMEN'S</Link>{menu === "womens" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("kids") }} className={menu === "kids" ? "selected" : ""}>
                    <Link to='http://localhost:3003/kids'>KID'S</Link>{menu === "kids" ? <hr /> : null}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Iniciar Sesión</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
