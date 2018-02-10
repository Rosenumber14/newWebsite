import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import UI from './Reducers/UI';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(combineReducers({
  UI
}));

ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>
  , document.getElementById('root'));
