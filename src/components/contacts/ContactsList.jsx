import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactItem } from './ContactItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
      <TableContainer sx={{ minWidth: 480, marginLeft: 'auto', marginRight: 'auto',}}>
        <Table  stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell key="index" sx={{fontWeight: 700}}>№</TableCell>
              <TableCell key="name" sx={{fontWeight: 700}}>Name</TableCell>
              <TableCell key="number" sx={{fontWeight: 700}}>Number</TableCell>
              <TableCell key="edit" sx={{fontWeight: 700}}>Edit</TableCell>
              <TableCell key="delete" sx={{fontWeight: 700}}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact, index) => (
              <ContactItem key={contact.id} {...contact} index={index + 1} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};
