import { SET_CREATORS, SET_CREATOR, SET_LOADING } from '../actions/types';

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
        loading: false,
      };
    case SET_CREATOR:
      return {
        ...state,
        creator: action.payload.data,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
