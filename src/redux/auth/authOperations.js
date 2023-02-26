import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../services/api/auth';

export const registerNewUser = createAsyncThunk('auth/register', async credentials => {
  try {
    const data = await api.createUser(credentials);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});
