import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { CreateContactBlur, CreateContactForm } from './CreateContact.styled';

export const CreateContact = ({ handleOpenClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handler = e => {
    e.preventDefault();
    const contact = contacts.find(
      c => c.name.toLowerCase() === name.toLowerCase()
    );
    if (contact) {
      alert(`there's already a contact with ${name} in phonebook`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
    handleOpenClose();
  };

  return (
    <>
      <CreateContactBlur onClick={handleOpenClose}/>
      <CreateContactForm onSubmit={handler}>
        <TextField
          label="Name"
          variant="outlined"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <TextField
          label="Number"
          variant="outlined"
          type="text"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={e => setNumber(e.target.value)}
          value={number}
        />
        <Button type="submit" variant="outlined">
          Add contact
        </Button>
      </CreateContactForm>
    </>
  );
};


