import React from 'react';
import { URL } from '../config';
function Logo(props) {
  return (
    <div>
      <img className='logo' src={`${URL}/assets/logo1.png`} alt={props.altText} />
    </div>
  );
}

export default Logo;