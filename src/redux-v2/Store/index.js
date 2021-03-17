import {applyMiddleware, createStore} from 'redux';
import rootReducers from '../Reducers/index';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';

const sagaMiddleware = createSagaMiddleware();

const configStore =  () => {
    const store = createStore(
        rootReducers,
        {},
        applyMiddleware(
            sagaMiddleware,
            logger
        )
    );
    sagaMiddleware.run(rootSaga);
    return { store: store }
}


export default configStore;
