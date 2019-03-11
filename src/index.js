import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store';
import Dashboard from './dashboard';
import Header from './components/header';

store.getState();
ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Dashboard />
  </Provider>, document.getElementById('root'));

