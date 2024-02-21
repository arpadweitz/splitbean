import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Button = styled.button`
color: #ffffff;
font-size: 1em;
margin: 1em 0em 1em 0em;
padding: 0.25em 1em;
border: 2px solid #764a38;
border-radius: 5px;
cursor: pointer;
background-color: #764a38;

transition: background-color 0.3s ease;

  &:hover {
    background-color: #c3c3c3;

    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;

`;

const StyledLink = styled(RouterLink)`
color: white;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;



const ButtonGoBackToProducts = ({ onClick }) => {
    return (
      <Button onClick={onClick}>
        <StyledLink to="/products">Go back to Products</StyledLink>
      </Button>
    );
  };
  
  export default ButtonGoBackToProducts;