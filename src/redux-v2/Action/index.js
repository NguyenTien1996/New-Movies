import * as types from './type';

export const getDataVirusCorona = () => ({
    type: types.GET_DATA_CORONA
})

//day laf cac action cua redux saga se xu ly
export const startGetDataVirus = (loading) => ({
    type: types.START_GET_DATA,
    loading
});

export const getDataCoronaSuccess = (corona) => ({
    type: types.GET_DATA_CORONA_SUCCESS,
    corona
});

export const getDataCoronaFail = (error) => ({
    type: types.GET_DATA_CORONA_FAIL,
    error
});