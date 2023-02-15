import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null
};

const handlePending = state => {
  state.isLoading = true;
}

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchContacts.pending] : handlePending,
    [fetchContacts.fulfilled] (state, action)  {
      state.isLoading = false;
      state.error = null;
      console.log(state)
      state.contacts = action.payload;
    },
    [fetchContacts.rejected] : handleReject,
    
    [addContact.pending]: handlePending,
    [addContact.fulfilled] (state, action){
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleReject,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action){
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(({id}) => id !== action.payload.id);
    },
    [deleteContact.rejected]: handleReject,
  },
});

export const contactsReducer = contactsSlice.reducer;
