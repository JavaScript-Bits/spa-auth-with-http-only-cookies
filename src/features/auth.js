import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: "e675cdbc-44c4-4e4c-ad64-bb3548345a9a",
      name: "John Doe",
      email: "silali@mail.com",
    },
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
