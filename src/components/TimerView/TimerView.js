import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTimer, toggleTimer } from '../../store/actions';
import { Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { formatTime } from '../../utils/formatTime';

import useStyles from './styles';

const TimerView = (props) => {
    const classes = useStyles();
    const { index, timer } = props;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleTimer(index));
    };
    const handleDeleteTimerClick = () => {
        dispatch(removeTimer(index));
    };

    return (
        <>
            <ListItem className={classes.listItem} >
                <ListItemText className={classes.listItemText}
                              primary={timer.name}
                />
                <ListItemText
                    primary={formatTime(timer.time)}
                />
                <ListItemIcon className={classes.listItemIcon} >
                    <IconButton onClick={handleClick} >
                        {!timer.isRunning ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
                    </IconButton >
                </ListItemIcon >
                <ListItemIcon className={classes.listItemIcon} >
                    <IconButton onClick={handleDeleteTimerClick} >
                        <RemoveCircleOutlineIcon />
                    </IconButton >
                </ListItemIcon >
            </ListItem >
            <Divider />
        </>
    )
};

export default TimerView;
