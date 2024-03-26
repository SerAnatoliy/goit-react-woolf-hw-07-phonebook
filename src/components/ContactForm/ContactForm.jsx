import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { selectContacts } from 'store/selectors';
import { addContact } from 'store/thunksOperations';
import { RiUserAddLine } from 'react-icons/ri';
import { Wrapper, Forma, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts  = useSelector(selectContacts);

  const handelChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        return;
    }
  };

  const handelSubmit = e => {
    e.preventDefault();
  
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Report.failure(
        'Sorry',
        `Such contact "${name}" already exists in your phonebook.`,
        'Ok'
      );
    } else {
      dispatch(addContact({ name, phone }));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Wrapper>
      <Forma onSubmit={handelSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handelChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            maxLength={20}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="phone"
            value={phone}
            onChange={handelChange}
            pattern="\+?\d{1,4}?[.\s]?\(?\d{1,3}?\)?[.\s]?\d{1,4}[.\s]?\d{1,4}[.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            maxLength={12}
          />
        </Label>
        <Button type="submit">
          <RiUserAddLine style={{ marginRight: '10px' }} />
          Add Contact
        </Button>
      </Forma>
    </Wrapper>
  );
};