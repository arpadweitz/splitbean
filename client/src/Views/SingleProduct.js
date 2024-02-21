import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";
import AddToCartButton from "../components/Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ProductImage = styled.img`
  width: 60%; /* Adjust the width of the image*/
  max-width: 600px; 
`;

const ProductDetails = styled.div`
  margin-left: 20px;
`;

const SingleProduct = ({cart, setCart}) => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${URL}/product/products/${productName}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [productName]);

  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const isProductInCart = cart.some((item) => item._id === product._id);
  
    // If the product is already in the cart, show an alert and don't add it again
    if (isProductInCart) {
        alert(`${product.name} is already in your cart!`);
    } else {
        // If the product is not in the cart, add it
        setCart([...cart, product]);
        alert(`${product.name} has been added to your cart! Please check the cart for the details`);
    }
  };

  return (
    <Wrapper>
      {product && (
        <ProductContainer>
          <ProductImage src={`${URL}${product.picture}`} alt={product.name} />
          <ProductDetails>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Taste Profile: {product.description}</p>
            {/* Add more details here */}
            <AddToCartButton onClick={() => handleAddToCart(product)}/>
          </ProductDetails>
        </ProductContainer>
      )}
    </Wrapper>
  );
};

export default SingleProduct;