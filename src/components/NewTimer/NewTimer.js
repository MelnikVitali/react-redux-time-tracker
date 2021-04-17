import React, { useCallback, useState } from 'react';
import {  useDispatch } from 'react-redux';

import {
    Box, FormControl,
    IconButton, InputAdornment,
    InputLabel, OutlinedInput
} from '@material-ui/core';

import PlayCircleIcon from '@material-ui/icons/PlayCircleFilledWhite';

import { createNewTimer } from '../../utils/createNewTimer';

import { addTimer } from '../../redux/actions';

import useStyles from './styles';

const NewTimer = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const handleChange = event => {
        setName(event.target.value);
    };

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            handleClickAddTimer(event);
        }

        return false;
    };

    const handleClickAddTimer = useCallback( event => {
        event.preventDefault();

        const newTimer = createNewTimer(name);

        dispatch(addTimer(newTimer));
        setName('');
    },[name,dispatch]);

    return (
        <Box component="section" className={classes.root} >
            <FormControl variant="outlined" className={classes.formControl} fullWidth >
                <InputLabel
                    htmlFor="outlined-adornment-tracker"
                    variant="outlined"
                    className={classes.label}
                >
                    Enter tracker name
                </InputLabel >
                <OutlinedInput
                    id="outlined-adornment-tracker"
                    type="text"
                    value={name}
                    autoComplete="off"
                    fullWidth
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    className={classes.input}
                    endAdornment={
                        <InputAdornment position="end" >
                            <IconButton
                                className={classes.btn}
                                aria-label="build tracker"
                                onClick={ handleClickAddTimer}
                            >
                                <PlayCircleIcon
                                    className={classes.playCircleIcon}
                                    aria-label="Add timer"
                                />
                            </IconButton >
                        </InputAdornment >
                    }
                    labelWidth={155}
                />
            </FormControl >
        </Box >
    );
};

export default NewTimer;
