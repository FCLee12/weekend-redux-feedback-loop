import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';

// Reducers
const feeling = (state = '', action) => {
    console.log('feeling rating reducer');
    if(action.type === 'ADD_FEELING_INPUT') {
        return state + action.payload;
    }
    return state;
};

const understanding = (state = 0, action) => {
    console.log('understanding rating reducer');
    return state;
};

const supported = (state = 0, action) => {
    console.log('supported rating reducer');
    return state;
};

const comments = (state = '', action) => {
    console.log('any comments reducer');
    return state;
};

// Redux Store
const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        supported,
        comments
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
