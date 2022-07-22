import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoged: false,
  wishlist: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.isLoged = true;
    },
    loggedOut: (state) => {
      state.isLoged = false;
    },
  },
});

export const { loggedIn, loggedOut } = userSlice.actions;
export default userSlice.reducer;
