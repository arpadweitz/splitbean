import React from 'react';
import styled from 'styled-components';
import { URL } from '../config';
import { Link } from 'react-router-dom';

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  position: relative;
  padding: 15em;
  background: url('${URL}/assets/subscription.png') center/cover no-repeat; /* background image here */
  text-align: center;
  color: #dbb275; /* Text color for the text inside the wrapper */
  width: 100%
  height: 30vh
  
`;

const Button = styled.button`
position: absolute;
    bottom: 28vh;
    right: 49vw;
    padding: 10px 20px;
    background-color: none;
    color: white;
    border-color: white;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    border: solid;
 `;

// const Title = styled.h1`
//   font-size: 1.5em;
// `;

const Text = styled.p`
  font-size: 27px;
  font-weight: 700;
  margin-inline: -70px;
  color: #604f36;
`;

const Subscriptionbanner = () => {
    return (
      <Wrapper>
        {/* <Text>P</Text> */}
        <Button as={Link} to="/products">Subscribe</Button>
      </Wrapper>
    );
  };

export default Subscriptionbanner;