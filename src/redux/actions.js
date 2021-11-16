import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction('contacts/fetchContactsRequest',);
export const fetchContactSuccess = createAction('contacts/fetchContactsSuccess',);
export const fetchContactError = createAction('contacts/fetchContactsError',);

export const addContactRequest = createAction('contacts/addContactsRequest',);
export const addContactSuccess = createAction('contacts/addContactsSuccess',);
export const addContactError = createAction('contacts/addContactsError',);

export const deleteContactRequest = createAction('contacts/deleteContactsRequest',);
export const deleteContactSuccess = createAction('contacts/deleteContactsSuccess',);
export const deleteContactError = createAction('contacts/deleteContactsError',);

export const changeFilter = createAction('contacts/changeFilter');