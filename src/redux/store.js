import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});

export default store;