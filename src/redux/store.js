import { createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const persistConfig = { // configuration object for redux-persist
    key: 'tracker',
    storage, // define which storage to use
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

export const store = createStore(
    persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
    composeWithDevTools(
        applyMiddleware()// add any middlewares here
    )
);

export const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step
