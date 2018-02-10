var React = require('react');
var ReactDOM = require('react-dom');
var { createStore, combineReducers } = require('redux');
var { Provider } = require('react-redux');

var App = require('./Components/App');
var UIReducer = require('./Reducers/UI');

let store = createStore(combineReducers({
  UIReducer
}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
