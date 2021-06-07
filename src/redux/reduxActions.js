import { createAction } from '@reduxjs/toolkit';

const actionAddContact = createAction('items/add', newContact => ({
  payload: newContact,
}));

const actionContactsLC = createAction('items/contacts_lc', arrayContacts => ({
  payload: arrayContacts,
}));

const actionRemoveContact = createAction('items/remove', id => ({
  payload: id,
}));
const actionSetFilter = createAction('filter/addFilter', filter => ({
  payload: filter,
}));

export {
  actionAddContact,
  actionContactsLC,
  actionRemoveContact,
  actionSetFilter,
};
