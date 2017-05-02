import React from 'react';
// const React = require('react');
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';


ReactDOM.render(
  // <HelloWorld name="Steve" />,
  // 👆 transpiled into 👇 by Babel
  // React.createElement(HelloWorld, {name: 'Steve'}),
  <Main />,
  document.getElementById('root')
);
