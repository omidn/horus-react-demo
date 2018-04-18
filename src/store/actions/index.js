import constants from 'store/constants';

export const request_demo = (q) => ({
  type: constants.QUERY_HORUS_REQUESTED,
  payload: { q }
});

export const changeSelectedIndex = (selectedIndex) => ({
  type: constants.SELECTED_TOKEN_CHANGE,
  payload: { selectedIndex }
});
