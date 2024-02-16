import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center; 
  padding: 10px; 
`;

const Column = styled.div`
  flex: 1;
  padding-top:50px;
  padding-bottom:50px; 
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Column className='column'> 
        <h3>Contact Us</h3>
        <p>Email: example@example.com</p>
        <p>Phone: +1234567890</p>
      </Column>
      <Column>
        <h3>Follow Us</h3>
        <p>Facebook</p>
        <p>Instagram</p>
      </Column>
      <Column>
        <h3>Address</h3>
        <p>123 Street Name, City</p>
        <p>Country, Postal Code</p>
      </Column>
    </FooterContainer>
  );
};

export default Footer;