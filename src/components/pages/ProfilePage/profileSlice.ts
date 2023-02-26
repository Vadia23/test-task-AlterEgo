import { createSlice } from "@reduxjs/toolkit";

import { IProfileState } from "../../../types";

const initialState: IProfileState = {
  username: "admin",
  password: "12345",
  isLogin: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

const { actions, reducer } = profileSlice;

export default reducer;

export const { toggleIsLogin } = actions;
