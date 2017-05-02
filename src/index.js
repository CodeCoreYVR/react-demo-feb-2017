import React from 'react';
// const React = require('react');
import ReactDOM from 'react-dom';
import './index.css';

function HelloWorld (props) {
  return <h1>{`Hello, ${props.name}`}</h1>
  // 👆 transpiled into 👇 by Babel
  // return React.createElement('h1', null, `Hello, ${props.name}`)
}

ReactDOM.render(
  <HelloWorld name="Steve" />,
  // 👆 transpiled into 👇 by Babel
  // React.createElement(HelloWorld, {name: 'Steve'}),
  document.getElementById('root')
);
