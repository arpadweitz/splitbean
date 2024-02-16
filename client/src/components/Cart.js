import React from 'react';
import { URL } from '../config';
function Cart(props) {
  return (
    <div>
      <img className='cart' src={`${URL}/assets/cart.png`} alt={props.altText} />
    </div>
  );
}

export default Cart;