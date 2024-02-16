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
  width: 60%; /* Adjust the width of the image as desired */
  max-width: 600px; /* Adjust the maximum width of the image as desired */
`;

const ProductDetails = styled.div`
  margin-left: 20px;
`;

const SingleProduct = () => {
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
            <AddToCartButton/>
          </ProductDetails>
        </ProductContainer>
      )}
    </Wrapper>
  );
};

export default SingleProduct;