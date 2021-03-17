import { Typography } from '@material-ui/core';

import useStyles from './styles';
import NewTimer from '../NewTimer';
import ListTimers from '../ListTimers';

function App() {
    const classes = useStyles();

    return (
        <section className={classes.root} >
            <header className="App-header" >
                <Typography component='h1' variant='h1' >
                    tracker
                </Typography >
            </header >

            <NewTimer/>
            <ListTimers/>
        </section >
    );
}

export default App;
