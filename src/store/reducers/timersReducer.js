import { NEW_TIMER, TOGGLE_TIMER, UPDATE, REMOVE_TIMER } from '../actions';

const timersReducer = (state = [], action) => {
    switch (action.type) {
        case NEW_TIMER:

            return [
                action.payload.timer,
                ...state
            ];
        case REMOVE_TIMER:
            return [...state.filter((timer,index) => action.payload.index !== index)];

        case TOGGLE_TIMER:
            // Invert the isRunning property of timer at index, return a copy of state
            return state.map((timer, index) => {
                if (action.payload.index === index) {
                    return { ...timer, isRunning: !timer.isRunning };
                }

                return timer;
            });

        case UPDATE:
            return state.map((timer) => {
                if (timer.isRunning) {
                    timer = { ...timer, time: timer.time += action.payload.deltaTime }
                }
                return timer
            });


        default:
            return state;
    }
};
export default timersReducer;