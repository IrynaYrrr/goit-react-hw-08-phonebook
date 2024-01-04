import { createSelector } from 'reselect';

export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.isLoading;

export const selectError = state => state.error;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  ({ contacts }, { filter }) => {
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
)
