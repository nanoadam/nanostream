import { SET_CREATORS, SET_CREATOR } from '../actions/types';

const initialState = {
  creators: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CREATORS:
      return {
        ...state,
        creators: action.payload.data,
      };
    case SET_CREATOR:
      return {
        ...state,
        creator: action.payload.data,
      };
    default:
      return state;
  }
}
