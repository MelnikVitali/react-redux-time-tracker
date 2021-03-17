export const formatTime = (time) => {

    let secs = Math.floor(time / 1000) % 60;
    let mins = Math.floor(time / 1000 / 60) % 60;
    let hrs = Math.floor(time / 1000 / 1000 / 60) % 60;
    if (secs < 10) {
        secs = '0' + secs;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (hrs < 10) {
        hrs = '0' + hrs;
    }
    return `${hrs} :${mins} :${secs}`;
};

