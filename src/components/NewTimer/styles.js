import { pxToRem } from '../../utils/pxToRem';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        marginTop: pxToRem(20),
        marginBottom:pxToRem(20)
    },
    playCircleIcon: {
        color: '#3faf6c',
        fontSize: `${pxToRem(48)} !important`
    },
    btn: {
        width: pxToRem(46),
        height: pxToRem(46),
        position: 'absolute',
        top: 0
    },
    label: {
        top: '-4px !important'
    },
    input: {
        width: pxToRem(558),
        height: pxToRem(48),
        borderColor: 'red !important',
        borderRadius: '23px !important',
        paddingRight: 0
    }

}));

export default useStyles;
