import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'store/selectors';
import { fetchContacts, deleteContact } from 'store/thunksOperations';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const removeContacts = id => {
    Confirm.show(
      'Delete contact',
      'You want to delete this contact?',
      'Yes',
      'No',
      () => {
        dispatch(deleteContact(id));
      },
      () => {
        return;
      },
      {
        titleColor: '#3373e2',
        okButtonBackground: '#3373e2',
      }
    );
  };

  if (isLoading && !error) {
    return <b>Request in progress...</b>;
  }

  if (error) {
    return <b>{error}</b>;
  }

  return (
    <List>
      {contacts ? (
        contacts.map(item => (
          <ContactItem
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.phone}
            deleteContacts={removeContacts}
          />
        ))
      ) : (
        <h2>not contacts</h2>
      )}
    </List>
  );
};