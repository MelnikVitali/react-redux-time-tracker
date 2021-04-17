import { makeStyles } from '@material-ui/core';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    listItem: {
        padding: `0  ${pxToRem(4)} 0 ${pxToRem(20)}`,
        maxHeight: pxToRem(60),
        '&:nth-child(1)': {
            borderTop: '1px solid rgba(0, 0, 0, 0.12) ',
        },
        borderBottom: '1px solid rgba(0, 0, 0, 0.12) '
    },
    listItemActive:{
        color: theme.palette.primary.main,
        backgroundColor: theme.backgroundColorTimerViewActive,
    },
    listItemIcon: {
        minWidth: pxToRem(49)
    },
    listItemTime: {
        minWidth: pxToRem(110),
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: pxToRem(26),
        fontSize: pxToRem(6),
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            paddingRight: pxToRem(10)
        }
    }
}));

export default useStyles;
