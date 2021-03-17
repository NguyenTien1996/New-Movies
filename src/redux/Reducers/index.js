import {combineReducers} from 'redux';
import {counterReducer} from './counter';
//Sau này có thêm reducers thì import vào đây
const rootReducers = combineReducers({
    counter: counterReducer
});
export default rootReducers;
//sau này sẽ dược truyền lưu vào trong Store