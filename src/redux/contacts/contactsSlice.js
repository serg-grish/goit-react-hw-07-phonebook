import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: '',
        isLoading: false,
        error: null,
    },
    reducers: {
        changeFilter: (state, action) => {
            state.filter = action.payload;
        },
    },

    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(({ id }) => id !== action.payload);
            })
            .addMatcher(
                isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending),
                state => {
                    state.isLoading = true;
                    state.error = null;
                },
            )
            .addMatcher(
                isAnyOf(
                    fetchContacts.fulfilled,
                    addContact.fulfilled,
                    deleteContact.fulfilled,
                    fetchContacts.rejected,
                    addContact.rejected,
                    deleteContact.rejected,
                ),
                state => {
                    state.isLoading = false;
                },
            )
            .addMatcher(
                isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected),
                (state, action) => {
                    state.error = action.payload;

                    console.error(action.payload);
                },
            );
    },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;