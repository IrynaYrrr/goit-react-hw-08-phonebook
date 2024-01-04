import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './contacts/filterSlice';


export const store = configureStore({
  reducer:{
    contacts: contactReducer,
    filter: filterReducer,
  }
});
