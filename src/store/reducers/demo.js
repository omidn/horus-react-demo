import constants from 'store/constants';

const defaultState = {
  isLoading: false,
  q: '',
  status: 0,
  result: [],
  message: ''
};

const demoReducer = (state = defaultState, action) => {
  console.log(action);
  switch(action.type) {
  case constants.QUERY_HORUS_REQUESTED:
    return {
      ...state,
      isLoading: true,
      q: action.payload.q
    };
  case constants.QUERY_HORUS_SUCCEEDED:
    return {
      ...state,
      isLoading: false,
      result: action.payload
    };
  case constants.QUERY_HORUS_FAILED: 
    return {
      ...state,
      isLoading: false,
      message: action.payload.message,
      status: action.payload.status
    };
  default:
    return state;
  }
};


export default demoReducer;
