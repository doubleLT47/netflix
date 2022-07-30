import axios from "axios";
import { loginStart, loginFailure, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart);
  try {
    const res = await axios.post(
      `https://luannt201mernnetflixclone.herokuapp.com/api/auth/login`,
      user
    );
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure);
  }
};
