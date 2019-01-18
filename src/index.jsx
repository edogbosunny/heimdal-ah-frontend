import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import configureStore from './store/configureStore';
import App from './App.jsx';
import 'font-awesome/css/font-awesome.min.css';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
