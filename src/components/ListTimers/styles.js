import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    listTimers: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            fontSize: 12
        },
    }
}));

export default useStyles;
