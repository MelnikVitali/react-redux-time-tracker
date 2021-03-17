export const NEW_TIMER = 'NEW_TIMER';
export const TOGGLE_TIMER = 'TOGGLE_TIMER';
export const SELECT_TIMER = 'SELECT_TIMER';
export const REMOVE_TIMER = 'REMOVE_TIMER';
export const UPDATE = 'UPDATE';

export const addTimer = timer => ({
    type: NEW_TIMER,
    payload:  timer
});

export const toggleTimer = index => ({
    type: TOGGLE_TIMER,
    payload: { index }
});

export const removeTimer = (index) => ({
    type: REMOVE_TIMER,
    payload: { index }
});

export const update = (deltaTime) => {
    return {
        type: UPDATE,
        payload: { deltaTime }
    }
};
