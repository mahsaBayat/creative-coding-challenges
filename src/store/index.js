import { compose, createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import middleware from '../middleware';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;
/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware(middleware));
const store = createStore(reducers, enhancer);

export default store;
