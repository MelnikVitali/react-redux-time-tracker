import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import App from './components/App';


ReactDOM.render(
    <React.StrictMode >
        <ThemeProvider theme={theme} >
            <Provider store={store} >
                <PersistGate loading={null} persistor={persistor} >
                    <CssBaseline />
                    <App />
                </PersistGate >
            </Provider >
        </ThemeProvider >
    </React.StrictMode >,
    document.getElementById('root')
);

