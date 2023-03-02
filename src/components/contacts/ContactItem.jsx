import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import IconButton from '@mui/material/IconButton';
import DeleteButton from '@mui/icons-material/Delete';
import EditButton from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import { ContactEdit } from './ContactEdit';

export const ContactItem = ({ id, index, name, number }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const deleteHandler = () => {
    dispatch(deleteContact(id));
  };

  const editHandler = () => setEdit(!edit);

  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1} key={id}>
        <TableCell key={index}>{index}</TableCell>
        <TableCell key={name}>{name}</TableCell>
        <TableCell key={number}>{number}</TableCell>
        <TableCell key="edit">
          <IconButton aria-label="edit" onClick={editHandler}>
            <EditButton />
          </IconButton>
          {edit && (
              <ContactEdit
                id={id}
                name={name}
                number={number}
                handlerOpenClose={editHandler}
              />
            )}
        </TableCell>
        <TableCell key="delete">
          <IconButton aria-label="delete" onClick={deleteHandler}>
            <DeleteButton />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
