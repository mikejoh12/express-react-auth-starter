import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setCredentials: (
      state,
      { payload: { user } }
    ) => {
      state.user = user
    },
    logOut: () => {}
  }
})

export const { setCredentials, logOut } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.auth.user;