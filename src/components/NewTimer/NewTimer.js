import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTimer } from '../../store/actions';
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilledWhite';

import useStyles from './styles';
import { Box,  FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';

const NewTimer = () => {
    const [name, setName] = useState('');

    const dispatch = useDispatch();
    const classes = useStyles();

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleKeyPress = (event) =>{
        // event.preventDefault();

        if (event.key === 'Enter') {
            handleClickAddTimer();
        }
        return false;
    };

    const handleClickAddTimer = () => {
        dispatch(addTimer(name));
        setName('');
    };

    return (
        <Box component='section' className={classes.root}>
            <FormControl className={classes.formControl} variant="outlined" fullWidth >
                <InputLabel
                    htmlFor="outlined-adornment-password"
                    variant='outlined'
                    className={classes.label}
                >
                    Enter tracker name
                </InputLabel >
                <OutlinedInput
                    id="outlined-adornment-password"
                    type='text'
                    value={name}
                    autoComplete='off'
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    onKeyDown={handleKeyPress}
                    className={classes.input}
                    endAdornment={
                        <InputAdornment position="end" >
                            <IconButton
                                className={classes.btn}
                                aria-label="toggle password visibility"
                                onClick={(name)=>handleClickAddTimer(name)}
                                edge="end"
                            >
                                <PlayCircleIcon
                                    // style={{ width: '47px', height: '47px' }}
                                    className={classes.playCircleIcon}
                                    aria-label="Add timer"
                                />
                            </IconButton >
                        </InputAdornment >
                    }
                    labelWidth={130}
                />
            </FormControl >
        </Box >
    );
};

export default NewTimer;
