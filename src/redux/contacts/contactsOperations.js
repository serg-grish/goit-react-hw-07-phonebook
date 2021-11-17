import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsAPI } from '../../services/contactsApi';

export const fetchContacts = createAsyncThunk(
    'contacts/getContacts',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await ContactsAPI.fetchContacts();

            return contacts;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            const data = await ContactsAPI.addContact(contact);

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            await ContactsAPI.deleteContact(id);

            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);
