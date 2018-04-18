import constants from 'store/constants';

const defaultState = {
  isLoading: false,
  q: '',
  status: 0,
  result: [],
  message: '',
  selectedIndex: -1
};

const demoReducer = (state = defaultState, action) => {
  switch(action.type) {
  case constants.QUERY_HORUS_REQUESTED:
    return {
      ...state,
      isLoading: true,
      q: action.payload.q,
      selectedIndex: -1
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
  case constants.SELECTED_TOKEN_CHANGE:
    return {
      ...state,
      selectedIndex: action.payload.selectedIndex
    };
  default:
    return state;
  }
};


export default demoReducer;
