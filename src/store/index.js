import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from '../utils/loadAndSaveState';

import reducers from './reducers';
import { update } from './actions';

const persistedState = loadState();

const store = createStore(
    reducers,
    persistedState,
    composeWithDevTools(
        applyMiddleware()
    )
);

store.subscribe(() => {
    saveState(store.getState());
});

let lastUpdateTime = Date.now();

// export let timerId = setTimeout(function tick() {
//     const now = Date.now();
//     const deltaTime = now - lastUpdateTime;
//     lastUpdateTime = now;
//     store.dispatch(update(deltaTime));
//
//     timerId = setTimeout(tick, 1000);
// }, 1000);

let timerId = setInterval(() => {
    const now = Date.now();
    const deltaTime = now - lastUpdateTime;
    lastUpdateTime = now;
    store.dispatch(update(deltaTime));
}, 1000);

// clearInterval(timerId);

export default store;
