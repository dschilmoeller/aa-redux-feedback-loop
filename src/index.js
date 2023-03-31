import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

const feeling = (state = 0, action) => {
    if (action.type === 'UPDATE_FEELING') {
        return action.payload
    } else if (action.type === 'RESET_ALL_REDUCERS') {
        return 0;
    } else {
        return state;
    }
}

const understanding = (state = 0, action) => {
    if (action.type === 'UPDATE_UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'RESET_ALL_REDUCERS') {
        return 0;
    } else {
        return state;
    }
}

const support = (state = 0, action) => {
    if (action.type === 'UPDATE_SUPPORT') {
        return action.payload;
    } else if (action.type === 'RESET_ALL_REDUCERS') {
        return 0;
    } else {
        return state;
    }
}

const comments = (state = '', action) => {
    if (action.type === 'UPDATE_COMMENTS') {
        return action.payload;
    } else if (action.type === 'RESET_ALL_REDUCERS') {
        return '';
    } else {
        return state;
    }
}



const storeInstance = createStore(
    combineReducers({
        //list of reducers here
        feeling,
        understanding,
        support,
        comments,
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
