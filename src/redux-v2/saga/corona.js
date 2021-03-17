import {put, call, takeEvery} from 'redux-saga/effects';
import * as action from '../Action/index';
import * as api from '../service/index';
import {GET_DATA_CORONA} from '../Action/type';

function* getDataVirusSaga() {
    try {
        //dispatch action loading - bat dau call data tu api ve
        yield put(action.startGetDataVirus(true));
        const data = yield call(api.getDataVirusCorona);
        if(data){
            yield put(action.getDataCoronaSuccess(data))
        }else{
            yield put(action.getDataCoronaFail({
                code:500,
                message: 'not found data',
            }))
        }
    } catch (e) {
        console.log(e);
    }

}
export function* watchGetDataVirusSaga () {
    //theo doi action hoat dong nhu the nao
    yield takeEvery(GET_DATA_CORONA, getDataVirusSaga);
}