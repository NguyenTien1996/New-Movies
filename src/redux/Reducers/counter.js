import * as types from '../Actions/type';

//Tạo ra state ặmc định
const initialState = {
    count: 0
}
export const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case types.INCREMENT:
            return {...state, count: action.val + 1}
        case types.DECREMENT:
            return {...state, count: action.val - 1}
        default:
            return state;
    }
}