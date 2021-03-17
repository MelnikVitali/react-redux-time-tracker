import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import store from './store';

import App from './components/App';


ReactDOM.render(
    <React.StrictMode >
        <ThemeProvider theme={theme} >
            <Provider store={store} >
                <CssBaseline />
                <App />
            </Provider >
        </ThemeProvider >
    </React.StrictMode >,
    document.getElementById('root')
);

