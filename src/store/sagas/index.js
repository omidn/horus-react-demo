import { takeLatest, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { getTimeAsync } from 'utils/API';

export function* getTime(action) {
    yield delay(400);
    const time = yield call(getTimeAsync);
    yield put({ type: 'GET_TIME_SUCCEEDED', payload: time.message});
}

function* sagas() {
    yield takeLatest('GET_TIME_ASYNC', getTime);
}

export default sagas;
