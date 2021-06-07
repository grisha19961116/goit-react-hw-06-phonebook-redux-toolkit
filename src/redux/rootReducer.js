import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  actionAddContact,
  actionContactsLC,
  actionRemoveContact,
  actionSetFilter,
} from './reduxActions';

const reducerContacts = createReducer([], {
  [actionAddContact]: (state, { payload }) => {
    const addToArray = [...state, payload];
    localStorage.setItem('name', JSON.stringify(addToArray));
    return addToArray;
  },
  [actionContactsLC]: (_, { payload }) => {
    return payload;
  },
  [actionRemoveContact]: (state, { payload }) => {
    const removeFromArray = [
      ...state.filter(contact => contact.id !== payload),
    ];
    localStorage.setItem('name', JSON.stringify(removeFromArray));
    return removeFromArray;
  },
});

const reducerFilter = createReducer('', {
  [actionSetFilter]: (_, { payload }) => payload,
});
export const rootReducer = combineReducers({
  contacts: reducerContacts,
  filter: reducerFilter,
});
