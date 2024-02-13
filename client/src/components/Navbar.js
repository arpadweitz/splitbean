import React from "react";
import { Link } from "react-router-dom";
function Navbar () {
    return <ul className="navbar">

        <li><Link link to="/Home">Home</Link></li>
        {/* <li><Link link to="/add_category">Add category</Link></li> */}
        {/* <li><Link link to="/add_product">Add product</Link></li> */}
        <li><Link link to="/display_categories">Categories</Link></li>
        
    </ul>
}

export default Navbar; 