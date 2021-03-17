import { NEW_TIMER, TOGGLE_TIMER, UPDATE, REMOVE_TIMER } from '../actions';

const timersReducer = (state = [], action) => {
    switch (action.type) {
        case NEW_TIMER:
            // Add a new timer, return a copy of state
            const name = action.payload.name ? action.payload.name : `No name tracker ${state.length + 1}`;

            return [
                {
                    name,
                    id: Math.random().toString(36).substr(2, 9),
                    time: 0,
                    isRunning: false
                },
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