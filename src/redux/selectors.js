import { createrSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createrSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const getFilteredContacts = contacts => {
      const normalizeFilter = filter.toLowerCase();
    return contacts.filter(text =>
      text.name.toLowerCase().includes(normalizeFilter),
    );
  };

  return getFilteredContacts(contacts);
  },
);
