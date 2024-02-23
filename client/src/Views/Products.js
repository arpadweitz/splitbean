
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../config";
import AddToCartButton from "../components/Button";


function Products({cart,setCart}) {
  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${URL}/product/products`);
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//     alert(`${product.name} has been added to your cart! Please check the cart for the details`);
// };

const handleAddToCart = (product) => {
  // Check if the product is already in the cart
  const isProductInCart = cart.some((item) => item._id === product._id);

  // If the product is already in the cart, show an alert and don't add it again
  if (isProductInCart) {
      alert(`${product.name} is already in your cart!`);
  } else {
      // If the product is not in the cart, add it and set the quantity to 1
      setCart([...cart, {  ...product, quantity:1 } ]  ) ;


      // setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);


      alert(`${product.name} has been added to your cart! Please check the cart for the details`);
  }
};

//   const addToCart = (product) => {
//     const newCartItems = [...cartItems, product];
//     setCartItems(newCartItems);
//   };

  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product._id}>
            <Link to={`/product/${encodeURIComponent(product.name)}`}>
              <img
                className="productImage"
                src={`${URL}${product.picture}`}
                alt={product.name}
              />
            </Link>
            <div className="productDescription">
              <p>Taste profile - {product.description}</p>
              <p>
                {product.name} - ${product.price}
              </p>
              <AddToCartButton onClick={() => handleAddToCart(product)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default Products;