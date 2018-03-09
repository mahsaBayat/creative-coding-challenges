import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import middleware from '../middleware';

export default function configureStore(initialState = {}) {
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            }) : compose;
    /* eslint-enable */

    const enhancer = composeEnhancers(applyMiddleware(thunk, middleware));
    const store = createStore(reducers, initialState, enhancer);

    if (module.hot) {
        /* eslint-disable global-require */
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
        /* eslint-enable */
    }

    return store;
}
