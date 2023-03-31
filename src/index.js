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
    } else {
        return state;
    }
}

const understanding = (state = 0, action) => {
    if (action.type === 'UPDATE_UNDERSTANDING') {
        return action.payload;
    }
    return state
}

const support = (state = 0, action) => {
    if (action.type === 'UPDATE_SUPPORT') {
        return action.payload;
    }
    return state
}

const comments = (state = '', action) => {
    if (action.type === 'UPDATE_COMMENTS') {
        return action.payload;
    }
    return state
}

const reviewResult = (state = {}, action) => {
    if (action.type === 'UPDATE_RESULT') {
        return state;
    }
    return state
}

// POST ROUTE TO DB GOES HERE

const storeInstance = createStore(
    combineReducers({
        //list of reducers here
        feeling,
        understanding,
        support,
        comments,
        reviewResult
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
