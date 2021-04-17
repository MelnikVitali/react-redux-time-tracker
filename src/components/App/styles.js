import { makeStyles } from '@material-ui/core';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: pxToRem(560),
        minWidth: pxToRem(320),
        width: '100%',
        margin: '0 auto 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: pxToRem(88),
        paddingBottom: pxToRem(40),
    },
    avatar: {
        margin: theme.spacing(1),
        fontSize: pxToRem(43)
    },
    title: {
        fontSize: pxToRem(45),
        fontWeight: 800,
        letterSpacing: pxToRem(1)
    }
}));

export default useStyles;
