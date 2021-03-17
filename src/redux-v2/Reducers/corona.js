import * as types from '../Action/type';

const initialState = {
    loading: false,
    virus: [],
    error: null,
}

export const coronaReducers = (state = initialState, action) => {
    switch(action.type){
        case types.START_GET_DATA:
            return {
                ...state, 
                loading:action.loading
            }
        case types.GET_DATA_CORONA_SUCCESS:
            return {
                ...state, 
                loading:false,
                virus:action.corona,
                error: null
            }
        case types.GET_DATA_CORONA_FAIL:
            return {
                ...state, 
                loading:false,
                virus: [],
                error: action.error
            }
        default:
            return state;
    }
}