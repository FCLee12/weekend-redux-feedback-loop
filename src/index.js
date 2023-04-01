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
        return action.payload;
    } else if(action.type === 'RESET_ALL') {
        return '';
    }
    return state;
};

const understanding = (state = '', action) => {
    console.log('understanding rating reducer');
    if(action.type === 'ADD_UNDERSTANDING_INPUT') {
        return action.payload;
    } else if(action.type === 'RESET_ALL') {
        return '';
    }
    return state;
};

const supported = (state = '', action) => {
    console.log('supported rating reducer');
    if(action.type === 'ADD_SUPPORTED_INPUT') {
        return action.payload;
    } else if(action.type === 'RESET_ALL') {
        return '';
    }
    return state;
};

const comments = (state = '', action) => {
    console.log('any comments reducer');
    if(action.type === 'ADD_COMMENTS_INPUT') {
        return action.payload;
    } else if(action.type === 'RESET_ALL') {
        return '';
    }
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
