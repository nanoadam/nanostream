import { TOGGLE_SIDEBAR } from '../types';

export default (state, { type }) => {
  switch (type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebar: !state.sidebar };

    default:
      return state;
  }
};
