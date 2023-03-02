import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

import { ContactsList } from 'components/contacts/ContactsList';
import { CreateContact } from 'components/contacts/CreateContact';
import { FilterContacts } from 'components/filter/FilterContacts';
import { Loader } from 'components/loader/Loader';
import { IconAddStyled, Inputs } from 'components/contacts/Inputs.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenClose = () => setOpen(!open);
  return (
    <>
      <Inputs>
        <FilterContacts />
        {open && <CreateContact handleOpenClose={handleOpenClose}/>}
        <IconAddStyled onClick={handleOpenClose} />
      </Inputs>
      <ContactsList />
      {isLoading && <Loader />}
    </>
  );
}
