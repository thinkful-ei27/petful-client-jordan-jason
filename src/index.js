import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Dashboard from './dashboard';
import store from './store';

store.getState();
ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>, document.getElementById('root'));

