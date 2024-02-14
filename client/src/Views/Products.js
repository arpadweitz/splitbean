import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
 

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
      try {
          const response = await axios.get('http://localhost:3000/products'); // Make GET request to fetch products
          setProducts(response.data); // Update state with fetched products
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
    fetchProducts(); //  fetchProducts
  }, []);

  return (
      <div>
          <h1>Products</h1>
          <ul>
              {products.map(product => (
                  <li key={product._id}>{product.name} - ${product.price}</li>
              ))}
          </ul>
      </div>
  );
}

export default Products;