import React, { useReducer } from 'react';
import LayoutContext from './layoutContext';
import layoutReducer from './layoutReducer';
import { TOGGLE_SIDEBAR } from '../types';

const LayoutState = props => {
  const initialState = {
    sidebar: true
  };

  const [state, dispatch] = useReducer(layoutReducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  return (
    <LayoutContext.Provider value={{ sidebar: state.sidebar, toggleSidebar }}>
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutState;
