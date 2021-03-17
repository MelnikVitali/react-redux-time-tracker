import { combineReducers } from 'redux';

import timersReducer from './timersReducer';
import selectedTimerReducer from './selectedTimerReducer';

export default combineReducers({
    timers: timersReducer,
    selectedTimer: selectedTimerReducer
});
