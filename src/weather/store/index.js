import {applyMiddleware, createStore} from 'redux';
import rootReducers from '../reducers/index';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const configRootPersist = {
    key:'root',
    storage,
    whileList: ['currentWeather'] //ten cua reducer
}
const rootPersistReducer = persistReducer(configRootPersist, rootReducers);

const sagaMiddleware = createSagaMiddleware();

const configStore =  () => {
    const store = createStore(
        rootPersistReducer,
        {},
        applyMiddleware(
            sagaMiddleware,
            logger
        )
    );
    sagaMiddleware.run(rootSaga);
    const persistor = persistStore(store);
    return { store: store , persistor: persistor}
}


export default configStore;
