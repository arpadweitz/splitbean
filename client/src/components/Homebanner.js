import React from 'react';
import styled from 'styled-components';
import { URL } from '../config';
import { Link } from 'react-router-dom';

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  position: static;
  padding: 22em;
  background: url('${URL}/assets/minimalesp.png') center/cover no-repeat; /* Add your background image here */
  text-align: center;
  color: #764a38; /* Text color for the text inside the wrapper */
  width: 100%
  height: 50vh
  margin-top: 18vh
`;

// Create a Button component that'll render a <button> tag with some styles
const Button = styled.button`
position: absolute;
bottom: 34vh;
right: 46vw;
padding: 10px 20px;
background-color: #764a38;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
}

`;

// const Title = styled.h1`
//   font-size: 1.5em;
// `;

const Text = styled.h1`
  font-size: 27px;
  font-weight: 700;
  margin-inline: -70px;
  color: #764a38;
`;

const Homebanner = () => {
  return (
    <Wrapper>
      <Text>Discover our new blend.</Text>
      <Button as={Link} to="/products">Buy now</Button>
    </Wrapper>
  );
};

export default Homebanner;