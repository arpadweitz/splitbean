import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { URL } from '../config';

const Subtotal = styled.h3`
padding-right: 1em;
font-family: system-ui;
font-size: larger;
`

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

function Checkout({ cart }) {
      
    const navigate = useNavigate();
    const stripe = useStripe();

    // Calculate subtotal


    const subTotal = cart.reduce((total,item)=> (total+item.price * item.quantity),0);


//     const subTotal = cart.reduce((total,item)=> {  
//         const quantity =  (total+item.price * product.quantity),0);
// }
    

    // const subTotal = cart.reduce((total, item) => {
    //     const total = itemQuantities[item._id] || 0;
    //     return total + item.price * quantity;
    // }, 0);

// 1. When we click PAY button this function triggers first
const createCheckoutSession = async () => {
    try {
      debugger;
      // 2. Sending request to the create_checkout_session controller and passing products to be paid for
      const response = await axios.post(
        `${URL}/payment/create-checkout-session`,
        { cart }
      );
      return response.data.ok
        ? // we save session id in localStorage to get it later
          (localStorage.setItem(
            "sessionId",
            JSON.stringify(response.data.sessionId)
          ),
          // 9. If server returned ok after making a session we run redirect() and pass id of the session to the actual checkout / payment form
          redirect(response.data.sessionId))
        : navigate("/payment/error");
    } catch (error) {
      navigate("/payment/error");
    }
  };

  const redirect = (sessionId) => {
    debugger;
    // 10. This redirects to checkout.stripe.com and if charge/payment was successful send user to success url defined in create_checkout_session in the controller (which in our case renders payment_success.js)
    stripe
      .redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: sessionId,
      })
      .then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
  };


    return (
        <>
        <Subtotal>Subtotal: ${subTotal.toFixed(2)}</Subtotal>
        <Button onClick={()=> createCheckoutSession()}> Checkout</Button>
        </>
    );
}

export default Checkout;