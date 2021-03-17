import { pxToRem } from '../../utils/pxToRem';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    listItem: {
        paddingRight: `0 !important`,
        // borderTop: ' 1px solid grey',
        // borderBottom: '1px solid grey'
    },
    listItemIcon: {
        minWidth: `${pxToRem(49)} !important`
    },
    listItemText: {
        minWidth: pxToRem(164),
        flex: '2 2 auto'
    }
}));

export default useStyles;
