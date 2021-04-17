import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { List } from '@material-ui/core';

import TimerView from '../TimerView';

import useStyles from './styles';

const ListTimers = () => {
    const classes = useStyles();

    const {timers} = useSelector(state => state, shallowEqual);

    return (
        <List className={classes.listTimers} >
            {timers.map(timer => {
                return (
                    <TimerView
                        key={timer.id}
                        timer={timer}
                    />
                )
            })}
        </List >
    );
};

export default ListTimers;
