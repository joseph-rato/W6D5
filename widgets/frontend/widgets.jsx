import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import MyComponent from './main';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  ReactDOM.render(<MyComponent />, root);
  // ReactDOM.render(<Clock />, root);
});
