import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-dom'
import {createStore, applyMiddleware } from 'redux'
import catsReducer from './reducers/catsReducer.js'
import thunk from 'react-redux'

const store = createSotre(catsReducer, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    
    document.getElementById('root')
);
