
import { pxToRem } from '../../utils/pxToRem';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    root:{
        maxWidth: pxToRem(560),
        minWidth:pxToRem(320),
        margin: '0 auto',
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        fontSize: pxToRem(48),
        marginTop: pxToRem(88)
    }
}));

export default useStyles;
