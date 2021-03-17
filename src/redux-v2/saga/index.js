//gom cac saga lai de theo doi - chay cung 1 luc
import {all, call} from 'redux-saga/effects';
import {watchGetDataVirusSaga } from './corona';


export default function* rootSaga() {
    yield all([
        call(watchGetDataVirusSaga)
    ])
}