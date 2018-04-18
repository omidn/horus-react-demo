const defaultState = {
    message: 'no time is fetched'
};

const time = (state = defaultState, action) => {
    if (action.type === 'GET_TIME') {
        return {
            message: new Date().toString()
        }
    }
    if (action.type === 'GET_TIME_SUCCEEDED') {
        return {
            message: action.payload
        }
    }
    return state;
}

export default time;
