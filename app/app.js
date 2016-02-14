import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';
import configureStore rom './redux/store';

// What does configureStore do??
const store = configureStore();

React.render((
  <Provider store={store}>
    <Router routes={routes(store)} />
  </Provider>
), document.getElementById('root'));
