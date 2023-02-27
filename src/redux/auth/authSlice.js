import { createSlice } from '@reduxjs/toolkit';
import { registerNewUser, loginUser, logOutUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerNewUser.pending]: (store, { payload }) => {},
    [registerNewUser.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      store.token = payload.token;
      store.isLoggedIn = true;
    },
    [registerNewUser.rejected]: (store, { payload }) => {},
    [loginUser.pending]: (store, { payload }) => {},
    [loginUser.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      store.token = payload.token;
      store.isLoggedIn = true;
    },
    [loginUser.rejected]: (store, { payload }) => {},
    [logOutUser.pending]: (store, { payload }) => {},
    [logOutUser.fulfilled]: store => {
      store.user = { name: null, email: null };
      store.token = '';
      store.isLoggedIn = false;
    },
    [logOutUser.rejected]: (store, { payload }) => {},
  },
});
