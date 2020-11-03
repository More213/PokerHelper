import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./reducers/rootReducers";
import './index.css';
import App from './app';
import thunk from "redux-thunk";

const store  = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('cards_domino'));
