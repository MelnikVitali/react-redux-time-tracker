import { v4 as uuidv4 } from 'uuid'

export const createNewTimer = (name, timers) => {
    const nameTimer = name ? name : `No name tracker #${timers.length + 1}`;
    return {
        id: uuidv4(),
        name: nameTimer,
        // title : !title ? 'Title' : title,
        // project : !project ? 'Project' : project,
        elapsed: 0,
        runningSince: null,
        isRunning: false,
        edit: false
    }
};