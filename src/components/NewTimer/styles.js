import { makeStyles } from '@material-ui/core';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: pxToRem(20),
        marginBottom: pxToRem(20)
    },
    formControl: {
        padding: `0 ${pxToRem(8)}`
    },
    playCircleIcon: {
        color: theme.palette.primary.main,
        fontSize: pxToRem(48)
    },
    btn: {
        width: pxToRem(46),
        height: pxToRem(46),
        top: 0,
        right: pxToRem(2)
    },
    label: {
        top: pxToRem(-6),
        paddingLeft: pxToRem(12),
        fontSize:pxToRem(18)
    },
    input: {
        maxWidth: pxToRem(558),
        maxHeight: pxToRem(48),
        paddingRight: 0
    }
}));

export default useStyles;
