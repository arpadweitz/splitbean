import React, { useState } from 'react';
import styled from 'styled-components';
import { URL } from '../config';
import ButtonCheckout from '../components/Button_checkout';
import ButtonGoBackToProducts from '../components/ButtonGoBackToProducts';
import Checkout from '../components/Checkout';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);

const Wrapper = styled.div`

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  position: static;
  margin-top: 12vh;

`;

const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ProductImage = styled.img`
  width: 40%;
  max-width: 400px;
`;

const ProductDetails = styled.div`
  margin-left: 20px;
`;

const EmptyCartMessage = styled.p`
  font-size: xx-large;
  font-family: system-ui;
  padding: 40px;
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  position: relative;
    margin-top: 15vh;
`;


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
`;


const Span = styled.span`
padding-left: 1em;
padding-right: 1em;
`

const Wrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
`;

const CartWrapper = styled.div`
position: static;
max-height: calc(110vh - 100px);
overflow-y: auto;
`;

const SubtotalContainer = styled.div`
position: sticky;
top: 15vh;
background-color: #fff;
padding: 10px;
display: flex;
align-items: baseline;
justify-content: flex-end;
`;

function Cart({ cart, setCart }) {    
    function handleIncrementClick(_id) {
        setCart(cart.map(item => {
            if (item._id === _id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            } else {
          return item;
        }
      }));
    }

    function handleDecreaseClick(_id) {
      let nextCart = cart.map(item => {
        if (item._id === _id) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        } else {
          return item;
        }
      });
  
      nextCart = nextCart.filter(p =>
        p.quantity > 0
      );
      setCart(nextCart);
    }
  
    const removeItemFromCart = (_id) => {
      const updatedCart = cart.filter((item) => item._id !== _id);
      setCart(updatedCart);
    };
  
    return (
      <div>
        {cart.length === 0 ? (
          <div>
            <Wrapper2>
              <EmptyCartMessage>Your cart is currently empty</EmptyCartMessage>
              <img className='cup' src={`${URL}/assets/coffeecup.png`} alt={'coffecup'} />
              <ButtonGoBackToProducts />
            </Wrapper2>
          </div>
        ) : (
          <CartWrapper>
            <SubtotalContainer>
              <Elements stripe={stripePromise}>
                <Checkout cart={cart} setCart={setCart} />
              </Elements>
              {/* <ButtonCheckout /> */}
            </SubtotalContainer>
            {cart.map((item) => (
              <div key={item.id}>
                <Wrapper>
                  {item && (
                    <ProductContainer>
                      <ProductImage src={`${URL}${item.picture}`} alt={item.name} />
                      <ProductDetails>
                        <h2>{item.name}</h2>
                        <p>Price: ${item.price}</p>
                        <p>Taste Profile: {item.description}</p>
                        <div>
                          <Button onClick={() => handleDecreaseClick(item._id, item.quantity)}>-</Button>
                          <Span>{item.quantity}</Span>
                          <Button onClick={() => handleIncrementClick(item._id,item.quantity)}>+</Button>
                        </div>
                        <div>
                          <Button onClick={() => removeItemFromCart(item._id)}>Remove</Button>
                        </div>
                      </ProductDetails>
                    </ProductContainer>
                  )}
                </Wrapper>
              </div>
            ))}
          </CartWrapper>
        )}
      </div>
    );
  }
  
  export default Cart;