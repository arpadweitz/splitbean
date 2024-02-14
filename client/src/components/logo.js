import React from 'react';

function Logo(props) {
  return (
    <div>
      <img className='logo' src={require('/Users/arpadweitz/BCS/coffee/client/src/pictures/logo.png')} alt={props.altText} />
    </div>
  );
}

export default Logo;