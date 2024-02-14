import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";

function Navbar() {
    return <ul className="navbar">
        <li><Logo/></li>
        <li>The Split bean</li>
        <li><Link link to="/home">Home</Link></li>
        <li><Link link to="/products">Products</Link></li>
        <li><Link link to="/subscription">Subscription</Link></li>
        <li><Link link to="/location">Location</Link></li>
        <li><Link link to="/coffee">Coffee</Link></li>

    </ul>
}

export default Navbar; 