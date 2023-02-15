import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

import { ContactsList } from './ContactsList';
import { CreateContact } from './CreateContact';
import { FilterContacts } from './FilterContacts';
import { Loader } from './Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <CreateContact />
      <ContactsList />
      <FilterContacts />
      {isLoading && <Loader/>}
    </>
  );
};
