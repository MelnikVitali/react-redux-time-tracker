/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
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

    const {id, name, runningSeconds, isRunning, timestamp} = props.timer;

    const [counterTime, setCounterTime] = useState(runningSeconds);
    const [timeTick, setTimeTick] = useState(timestamp);

    const timerRef = useRef(null);

    useEffect(() => {
        const now = DateTime.now().toSeconds();

        if (isRunning) {
            setCounterTime(Math.ceil(now - timeTick + runningSeconds))
        }
    }, []);

    useEffect(() => {
        dispatch(updateTimer(
            {
                id,
                runningSeconds: counterTime,
                timestamp: timeTick
            }
        ));

        if (isRunning) {
            timerRef.current = setTimeout(() => {
                setCounterTime(prev => prev + 1);

                setTimeTick(DateTime.now().toSeconds());
            }, 1000)
        }

        return () => clearTimeout(timerRef.current);
    }, [id, name, counterTime, isRunning, timeTick, dispatch]);

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
                            .fromObject({seconds: counterTime})
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
