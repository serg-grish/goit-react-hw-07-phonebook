import s from "./ContactsList.module.css";
import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem/ContactListItem";
import { useSelector, useDispatch } from "react-redux";
import contactsOperation from "../../redux/operations";
import { getVisibleContacts } from "../../redux/selectors";
import { useEffect } from 'react';

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(getVisibleContacts);

  const onDeleteContact = (id) => dispatch(contactsOperation.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          contactName={name}
          contactNumber={number}
          onClickDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
