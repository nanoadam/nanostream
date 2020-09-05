import axios from "axios";
import { SET_CREATORS } from "./types";

export const getCreators = () => async (dispatch) => {
  const creators = await axios.get("/api/v1/creators");
  return await dispatch({
    type: SET_CREATORS,
    payload: { data: creators.data.data },
  });
};
