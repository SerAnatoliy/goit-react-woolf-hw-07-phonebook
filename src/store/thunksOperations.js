import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  getAllContacts,
  addNewContacts,
  delContacts,
} from 'api/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await addNewContacts(contact);
      Notify.success(`You added a new contact: ${data.name}`)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
   async (id, { rejectWithValue }) => {
    try {
      const { data } = await delContacts(id);
      Notify.info('Contact successfully deleted.');
      return data;
    } catch (error) {
       return rejectWithValue(error.message);
    }
  }
)