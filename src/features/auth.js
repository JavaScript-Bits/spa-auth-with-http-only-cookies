import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {},
    clearUser: (state, action) => {},
    attemptLogin: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser, clearUser, attemptLogin } = authSlice.actions;

export default authSlice.reducer;
