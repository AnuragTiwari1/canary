import { SET_TRENDING_SONGS } from '../constants';

const initialState = {
  trendingSongs: [],
};
function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_TRENDING_SONGS:
      return {
        ...state,
        trendingSongs: payload,
      };
    default:
      return state;
  }
}

export default dataReducer;
