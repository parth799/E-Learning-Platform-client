import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,  // Fix the property name
  reducers: {
    userRegistration: (state, action) => {
      state.token = action.payload.token;
    },
    userLoggedIn: (state, action) => {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedout: (state) => {
      state.token = "";
      state.user = "";
    },
  },
});

export const { userRegistration, userLoggedIn, userLoggedout } = authSlice.actions;
export default authSlice.reducer;
