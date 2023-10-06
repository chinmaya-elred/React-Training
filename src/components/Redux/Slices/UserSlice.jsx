import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    username: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.loggedIn = true;
      state.username = action.payload.username;
    },
    logoutUser: (state) => {
      state.loggedIn = false;
      state.username = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
