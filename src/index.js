import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import App from './App'
import catsReducer from './reducers/catsReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import catsReducer from './reducers/catsReducer'

let store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById('root')
);
