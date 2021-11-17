
import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;

export const getVisibleContacts = createSelector(
    [getContacts, getFilter],
     (contacts, filter) => {
    return contacts.filter(
        contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.number.includes(filter),
    );
});