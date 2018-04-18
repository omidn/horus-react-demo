import { takeLatest, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { fetch_demo_query } from 'utils/API';
import constants from 'store/constants';

export function* fetchHorus(action) {
  console.log('sending action', action);
  try {
    yield delay(1000);
    const response = yield call(fetch_demo_query);
    yield put({type: constants.QUERY_HORUS_SUCCEEDED, payload: response});
  } catch(err) {
    yield put({type: constants.QUERY_HORUS_FAILED, payload: {status: err.status, message: err.message}});
  }
}

function* sagas() {
  yield takeLatest(constants.QUERY_HORUS_REQUESTED, fetchHorus);
}

export default sagas;
