import { useEffect, useState } from 'react';
import style from './App.module.css';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const addContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      toast.error(`${newContact.name} is already in contacts!`);
      return;
    }

    const contactWithId = {
      ...newContact,
      id: nanoid(),
    };
    setContacts(prevContacts => {
      return [...prevContacts, contactWithId];
    });
    toast.success(`Contact ${contactWithId.name} added successfully!`);
  };

  const deleteContact = id => {
    const deletedContact = contacts.find(contact => contact.id === id);
    if (!deletedContact) {
      toast.error('Contact not found!');
      return;
    }
    setContacts(contacts.filter(contact => contact.id !== id));
    toast.success(`Contact ${deletedContact.name} deleted successfully!`);
  };

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>

      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      <ToastContainer />
    </div>
  );
}

export default App;
