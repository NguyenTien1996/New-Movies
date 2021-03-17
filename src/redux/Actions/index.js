import * as  types from './type';
//Định hành động
export const incrementCounter = (val) => ({
    type: types.INCREMENT,
    val
})
//Trả  về 1 object

export const decrementCounter = (val) => ({
    type: types.DECREMENT,
    val
})