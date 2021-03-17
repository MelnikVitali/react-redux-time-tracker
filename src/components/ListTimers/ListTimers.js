import React from 'react';
import { useSelector } from 'react-redux';

import { List } from '@material-ui/core';

import TimerView from '../TimerView';


const ListTimers = () => {
    const timers = useSelector(state => state.timers);

    return (
        <List style={{ width: '100%' }} >
            {timers.map((timer, index) => {
                return (

                        <TimerView
                            key={`timer-${index}`}
                            timer={timer}
                            index={index}
                        />
                )
            })}
        </List >

    );
};

export default ListTimers;
