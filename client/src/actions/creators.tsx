import axios from 'axios';
import { Dispatch } from 'redux';
import { SET_CREATORS, SET_CREATOR } from './types';

export const getCreators = () => async (dispatch: Dispatch) => {
  try {
    const creators = await axios.get('/api/v1/creators');
    return await dispatch({
      type: SET_CREATORS,
      payload: { data: creators.data.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCreator = (id: Number) => async (dispatch: Dispatch) => {
  try {
    const creator = await axios.get(`/api/v1/creators/${id}`);
    return await dispatch({
      type: SET_CREATOR,
      payload: { data: creator.data.data },
    });
  } catch (error) {
    console.log(error);
  }
};
