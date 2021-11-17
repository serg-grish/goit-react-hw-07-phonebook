import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import Swal from 'sweetalert2';
import s from './FormContact.module.css';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getContacts);

    const nameInputId = shortid();
    const numberInputId = shortid();

    const checkContact = (contacts, name, number) => {
        const includedName = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        );

        const includedNumber = contacts.find(
            contact => contact.number.replace(/[^0-9]/g, '') === number.replace(/[^0-9]/g, ''),
        );

        if (includedName) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${name.toUpperCase()}\nis already in contacts!`,
                confirmButtonColor: 'indianred',
            });

            return includedName;
        }

        if (includedNumber) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `This number is already in contacts as\n${includedNumber.name.toUpperCase()}`,
                confirmButtonColor: 'indianred',
            });
            return includedNumber;
        }
    };

    const handleSetUserInfo = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const existedContact = checkContact(contacts, name, number);

        if (existedContact) return;

        dispatch(contactsOperations.addContact({ name, number }));
        setName('');
        setNumber('');
    };

    return (
        <form className={s.form} onSubmit={handleSubmit} action="">
           <label  className={s.label}  htmlFor={nameInputId}>Name</label>
                <input
                    onChange={handleSetUserInfo}
                    id={nameInputId}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    placeholder="Name"
                    autoComplete="off"
                    required
                    className={s.input}
                />
                
           
                <label className={s.label} htmlFor={numberInputId}>Number</label>
                <input
                    onChange={handleSetUserInfo}
                    id={numberInputId}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    placeholder="111-11-11"
                    autoComplete="off"
                    required
                    className={s.input}
                />
                
           
                <button className={s.button} type="submit">
        <span className={s.btnText}>Add contact</span>
      </button>
        </form>
    );
};
export default ContactForm;