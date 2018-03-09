import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from '../store';

const store = configureStore();

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
