
import ContactForm from '../FormContact/FormContact';
import ContactList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import './app.scss';

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}