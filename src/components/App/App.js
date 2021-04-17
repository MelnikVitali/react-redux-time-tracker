import { Typography } from '@material-ui/core';
import AvTimerIcon from '@material-ui/icons/AvTimer';

import NewTimer from '../NewTimer';
import ListTimers from '../ListTimers';

import useStyles from './styles';

function App() {
    const classes = useStyles();

    return (
        <section className={classes.root} >
            <header className={classes.paper}
            >
                < AvTimerIcon color="secondary" className={classes.avatar} />
                <Typography component="h1" variant="h2" className={classes.title} >
                    tracker
                </Typography >
            </header >
            <NewTimer />
            <ListTimers />
        </section >
    );
}

export default App;
