import {put, call,  takeLatest} from 'redux-saga/effects';
import * as actions from '../action/index';
import {GET_CURRENT_WEATHER} from '../action/type';
import * as api from '../service/api';
import * as helper from '../helpers/common';

function* currentWeatherSaga ({city}) {
    try {
        yield put(actions.startGetCurrentWeather(true));
        const weather = yield call(api.getCurrentWeather, city);
        if(!helper.isEmptyObject(weather)){
            if(weather.cod === 200){
                yield put(actions.getCurrentWeatherSuccess(weather));
            }else{
                yield put(actions.getCurrentWeatherFail({
                    code:500,
                    message:'not fount data'
                }))
            }
        }else{
            yield put(actions.getCurrentWeatherFail({
                code:500,
                message:'not fount data'
            }))
        }
    } catch (err) {
        // console.log(err);
        yield put(actions.getCurrentWeatherFail(err))
    }
}
export function* watchCurrentWeatherSaga() {
    yield takeLatest(GET_CURRENT_WEATHER, currentWeatherSaga);
}