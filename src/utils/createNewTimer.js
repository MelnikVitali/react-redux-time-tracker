import { v4 as uuidV4 } from 'uuid';

import { DateTime } from 'luxon';

export const createNewTimer = (name) => {
    const nameTimer = name ? name : DateTime.now().toFormat('dd-LL-yyyy HH:mm:ss');

    return {
        id: uuidV4(),
        name: nameTimer,
        runningSeconds: 0,
        isRunning: true,
        currentSeconds: DateTime.now().toSeconds(),
    };
};
