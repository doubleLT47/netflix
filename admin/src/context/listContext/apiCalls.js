import axios from "axios";
import {
  getListsStart,
  getListsFailure,
  getListsSuccess,
  deleteListStart,
  deleteListSuccess,
  deleteListFailure,
  createListStart,
  createListSuccess,
  createListFailure,
  updateListStart,
  updateListSuccess,
  updateListFailure,
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart);
  try {
    const res = await axios.get(
      `https://luannt201mernnetflixclone.herokuapp.com/api/lists/`,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure);
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart);
  try {
    await axios.delete(
      `https://luannt201mernnetflixclone.herokuapp.com/api/lists/` + id,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure);
  }
};

// create
export const createList = async (list, dispatch) => {
  dispatch(createListStart);
  try {
    const res = await axios.post(
      `https://luannt201mernnetflixclone.herokuapp.com/api/lists/`,
      list,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure);
  }
};

export const updateMovie = async (id, list, dispatch) => {
  dispatch(updateListStart);
  try {
    const res = await axios.put(
      `https://luannt201mernnetflixclone.herokuapp.com/api/lists/${id}`,
      list,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(updateListSuccess(res.data));
  } catch (err) {
    dispatch(updateListFailure);
  }
};
