import { v4 as uuidv4 } from 'uuid';

import { DateTime } from 'luxon';

export const createNewTimer = (name) => {
    const nameTimer = name ? name : DateTime.now().toFormat('dd-LL-yyyy HH:mm:ss');

    return {
        id: uuidv4(),
        name: nameTimer,
        runningSeconds: 0,
        isRunning: true,
        timestamp: DateTime.now().toSeconds(),
    }
};
