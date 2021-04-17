export const NEW_TIMER = 'NEW_TIMER';
export const TOGGLE_TIMER = 'TOGGLE_TIMER';
export const SELECT_TIMER = 'SELECT_TIMER';
export const REMOVE_TIMER = 'REMOVE_TIMER';
export const UPDATE_TIMER = 'UPDATE_TIMER';

export const addTimer = timer => ({
    type: NEW_TIMER,
    payload: {timer}
});

export const toggleTimer = id => ({
    type: TOGGLE_TIMER,
    payload: {id}
});

export const removeTimer = id => ({
    type: REMOVE_TIMER,
    payload: {id}
});

export const updateTimer = timer => {
    return {
        type: UPDATE_TIMER,
        payload: {timer}
    }
};
