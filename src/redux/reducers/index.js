import { combineReducers } from 'redux';

import timersReducer from './timersReducer';

export default combineReducers({
    timers: timersReducer,
});
