import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth/authSlice';
import { contactsSlicer } from './contactsSlice/contactsSlice';
import { filterSlicer } from './filterSlice/filterSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    contacts: contactsSlicer.reducer,
    filter: filterSlicer.reducer,
  },
});
