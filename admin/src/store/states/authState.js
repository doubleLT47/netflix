import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../utils/storeData";
import { LOCAL_STORAGE } from "../../constants/storage.constant";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLogin: false,
    accessToken: getItem(LOCAL_STORAGE, "token"),
    refreshToken: getItem(LOCAL_STORAGE, "refreshToken"),
    error: null,
    loadingLogin: false,
    loadingRegister: false,
  },
  reducers: {
    loginStart: (state) => {
      state.loadingLogin = true;
    },
    loginSuccess: (state, action) => {
      state.loadingLogin = false;
      state.user = action.payload.user || state.user;
      state.accessToken = action.payload.accessToken || state.accessToken;
      state.refreshToken = action.payload.refreshToken || state.refreshToken;
    },
    loginFailure: (state, action) => {
      state.loadingLogin = false;
      state.user = null;
      state.error = action.payload.error;
    },
    logout: (state) => {
      state.loadingLogin = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
