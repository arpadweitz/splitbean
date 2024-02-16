import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
color: #ffffff;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #604f36;
border-radius: 5px;
cursor: pointer;
background-color: #604f36;
`;

const AddToCartButton = ({ onClick }) => {
    return (
      <Button onClick={onClick}>
            Add to Cart
        </Button>
    );
};

export default AddToCartButton;