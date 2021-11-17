import ContactListItem from './ContactListItem/ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactsList.module.css';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactList = () => {
    const contacts = useSelector(contactsSelectors.getVisibleContacts);
    const dispatch = useDispatch();
    return (
        <ul className={s.list}>
            {contacts.map(({ name, number, id }) => {
                return (
                    <ContactListItem
                        key={id}
                        name={name}
                        number={number}
                        id={id}
                        onClick={() => dispatch(contactsOperations.deleteContact(id))}
                    />
                );
            })}
        </ul>
    );
};

export default ContactList;