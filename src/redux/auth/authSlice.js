import { createSlice } from '@reduxjs/toolkit';
import { registerNewUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerNewUser.pending]: (store, { payload }) => {},
    [registerNewUser.fulfilled]: (store, { payload }) => {},
    [registerNewUser.rejected]: (store, { payload }) => {},
  },
});
