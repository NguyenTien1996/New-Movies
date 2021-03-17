import {combineReducers} from 'redux';
import {coronaReducers} from './corona';

const rootReducers = combineReducers({
    corona: coronaReducers
});
export default rootReducers;