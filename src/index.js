// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';  // Import Provider
import store from './redux/store';       // Import the store

ReactDOM.render(
  <Provider store={store}>               
    <App />
  </Provider>,
  document.getElementById('root')
);
