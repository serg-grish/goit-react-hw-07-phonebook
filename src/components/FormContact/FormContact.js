import React, { useState } from "react";
import s from "./FormContact.module.css";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/actions";
import { getContacts } from "../../redux/selectors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      alert(`Введите, пожалуйста, имя контакта.`);
      return;
    }

    if (number === "") {
      alert(`Введите, пожалуйста, номер телефона контакта.`);
      return;
    }

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      reset();
      return;
    }

    dispatch(contactsActions.addContact(name, number));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={handleChange}
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={number}
          onChange={handleChange}
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button className={s.button} type="submit">
        <span className={s.btnText}>Add contact</span>
       </button>
    </form>
  );
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
