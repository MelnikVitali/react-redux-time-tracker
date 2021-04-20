/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { DateTime, Duration } from 'luxon'

import {
    IconButton, ListItem,
    ListItemIcon, ListItemText
} from '@material-ui/core';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import { removeTimer, toggleTimer, updateTimer } from '../../redux/actions';

import useStyles from './styles';

const TimerView = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const {id, name, runningSeconds, isRunning, currentSeconds} = props.timer;

    // const [counterTime, setCounterTime] = useState(runningSeconds);
    // const [timeTick, setTimeTick] = useState(currentSeconds);

    useEffect(() => {
        const now = DateTime.now().toSeconds();

        if (isRunning) {
            // setCounterTime(now - timeTick + runningSeconds);
            dispatch(updateTimer(
                {
                    id,
                    runningSeconds: +(now - currentSeconds + runningSeconds).toFixed(3),
                    currentSeconds
                }
            ));
        }
    }, []);

    useEffect(() => {
        const timeoutTime = 1000;
        let timerId;

        if (isRunning) {
            let lastUpdateTime = DateTime.now().toSeconds();

            timerId = setInterval(() => {
                const now = DateTime.now().toSeconds();
                const deltaTime = now - lastUpdateTime;
                lastUpdateTime = now;

                // setCounterTime(prev => prev + deltaTime);
                // setTimeTick(now);

                dispatch(updateTimer(
                    {
                        id,
                        runningSeconds: +(runningSeconds + deltaTime).toFixed(3),
                        currentSeconds: now
                    }
                ));
            }, timeoutTime);
        }

        return () => clearInterval(timerId);
    }, [id, name, runningSeconds, isRunning, currentSeconds, dispatch]);

    const handleToggleTimer = () => {
        dispatch(toggleTimer(id));
    };

    const handleDeleteTimerClick = () => {
        dispatch(removeTimer(id));
    };

    return (
        <>
            <ListItem className={[
                classes.listItem,
                isRunning ? classes.listItemActive : null
            ].join(' ')} >
                <ListItemText primary={name} />
                <ListItemText
                    className={classes.listItemTime}
                    primary={
                        Duration
                            .fromObject({seconds: Math.ceil(runningSeconds)})
                            .toISOTime({suppressMilliseconds: true})
                    }
                />
                <ListItemIcon className={classes.listItemIcon} >
                    <IconButton onClick={handleToggleTimer} >
                        {isRunning ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
                    </IconButton >
                    <IconButton onClick={handleDeleteTimerClick} color="secondary" >
                        <RemoveCircleOutlineIcon />
                    </IconButton >
                </ListItemIcon >
            </ListItem >
        </>
    )
};

export default TimerView;