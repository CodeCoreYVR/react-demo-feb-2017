import React from 'react';


function HelloWorld (props) {
  return <h1>{`Hello, ${props.name}`}</h1>
  // 👆 transpiled into 👇 by Babel
  // return React.createElement('h1', null, `Hello, ${props.name}`)
}

export default HelloWorld;
