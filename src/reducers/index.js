import { combineReducers } from 'redux';

import {task} from './taskReducer';
import {auth} from './authReducer';

const rootReducer = combineReducers({
    task,
    auth
});

export default rootReducer;