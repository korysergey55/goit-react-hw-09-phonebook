import {createSelector} from '@reduxjs/toolkit';

export const contactsSelector = (state) =>  state.contacts.items;
export const filterSelector = (state) => state.contacts.filter;
export const loaderSelector = (state) => state.contacts.loader;

export const getfilteredContactsSelector = createSelector(
 [contactsSelector, filterSelector],
 (contacts, filter) =>
  contacts.filter((product) =>
   product.name.toLowerCase().includes(filter.toLowerCase())
  )
);