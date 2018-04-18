export const getTime = () => ({
    type: 'GET_TIME'
});

export const timeUpdated = (time) => ({
    type: 'TIME_UPDATED',
    time
});

export const getTimeAsync = () => ({
    type: 'GET_TIME_ASYNC'
});

