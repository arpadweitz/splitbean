import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";
import Button from "../components/Button";
import AddToCartButton from "../components/Button";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";


function Products() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${URL}/product/products`); // Make GET request to fetch product
            setProducts(response.data.data); // Update state with fetched products
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts(); //  fetchProducts
    }, []);

    const handleAddToCart = () => {
        console.log('Product added to cart!');
    };

    return (
        <div>
            {/* <h1>Products</h1> */}
            <ul className="products">
                {products.map(product => (
                    <li key={product._id}>

                        <Link to={`/product/${encodeURIComponent(product.name)}`}>
                            <img className="productImage" src={`${URL}${product.picture}`} alt={product.name} />
                        </Link>
                        <div className="productDescription">
                            <p>Taste profile - {product.description}</p>
                            <p>{product.name} - ${product.price}</p>
                            <AddToCartButton onClick={() => handleAddToCart(product)} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;