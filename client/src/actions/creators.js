import axios from "axios";

export const getCreators = () => async (dispatch) => {
  const creators = await axios.get("/api/v1/creators");
  console.log(creators.data.data);
};
