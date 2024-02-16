import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import Cart from "./Cart";

function Navbar() {
    return <ul className="navbar">
        {/* <li><Logo /></li> */}
        <li><Link link to="/home"> <Logo/> <p className="splitbean">The Split Bean</p> </Link></li>
        <li><Link link to="/products">Products</Link></li>
        <li><Link link to="/subscription">Subscription</Link></li>
        <li><Link link to="/location">Location</Link></li>
        <li><Link link to="/coffee">Coffee</Link></li>
        <li><Link link to="/cart"> <Cart /></Link></li>

    </ul>
}

export default Navbar; 