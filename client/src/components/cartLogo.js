import React from 'react';
import { URL } from '../config';
function cartLogo(props) {
  return (
    <div>
      <img className='cart' src={`${URL}/assets/cart.png`} alt={props.altText} />
    </div>
  );
}

export default cartLogo;