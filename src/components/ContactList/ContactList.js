import style from './ContactList.module.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionContactsLC,
  actionRemoveContact,
  actionSetFilter,
} from '../../redux/reduxActions';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();
  const removeContact = id => dispatch(actionRemoveContact(id));
  const resetFilter = () => dispatch(actionSetFilter(''));
  useEffect(() => {
    const savedContacts = localStorage.getItem('name');
    if (savedContacts === 'undefined') return;
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts === null) return;
    if (parsedContacts.length === 0) return;
    dispatch(actionContactsLC(parsedContacts));
  }, [dispatch]);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return contacts.length !== 0 ? (
    <ul className={style.contactUl}>
      {getVisibleContacts().map(({ id, name, phone }) => {
        return (
          <li className={style.contactLi} key={id}>
            <p className={style.name}>{name}</p>
            <p className={style.phone}>{phone}</p>
            <p
              onClick={() => {
                removeContact(id);
                resetFilter();
              }}
              className={style.p__delete}
            >
              Delete
            </p>
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default ContactList;
