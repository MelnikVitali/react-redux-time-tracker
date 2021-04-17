import { NEW_TIMER, TOGGLE_TIMER, UPDATE_TIMER, REMOVE_TIMER } from '../actions';

const timersReducer = (state = [], action) => {
    switch (action.type) {
        case NEW_TIMER:
            return [
                action.payload.timer,
                ...state
            ];

        case REMOVE_TIMER:
            return [...state.filter(timer => timer.id !== action.payload.id)];

        case TOGGLE_TIMER:
            // Invert the isRunning property of timer at index, return a copy of state
            return state.map((timer) => {
                if (action.payload.id === timer.id) {
                    return {...timer, isRunning: !timer.isRunning};
                }

                return timer;
            });

        case UPDATE_TIMER:
            return state.map((timer) => {
                if (timer.id === action.payload.timer.id) {
                    timer = {
                        ...timer,
                        runningSeconds: action.payload.timer.runningSeconds,
                        timestamp: action.payload.timer.timestamp
                    }
                }

                return timer;
            });

        default:
            return state;
    }
};

export default timersReducer;
