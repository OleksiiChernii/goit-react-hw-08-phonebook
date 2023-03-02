export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
  return state.contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())
  );
};

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
