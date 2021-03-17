import {applyMiddleware, createStore} from 'redux';
import RootReducers from '../Reducers/index';
import logger from 'redux-logger';

const store = createStore(
    RootReducers,
    applyMiddleware(logger)
);
export default store;