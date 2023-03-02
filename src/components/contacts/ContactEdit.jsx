import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from 'styled-components'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';

export const ContactEdit =  ({id, name, number, handlerOpenClose}) => {
    const dispatch = useDispatch();

    const [newname, setNewname] = useState(name);
    const [newnumber, setNewnumber] = useState(number);


    const handler = e => {
        e.preventDefault();
        dispatch(editContact({id, name: newname, number: newnumber}));
        handlerOpenClose();
    }
    return (
        <>
          <EditContactBlur onClick={handlerOpenClose}/>
          <EditContactDiv>
            <TextField
              label="Name"
              variant="outlined"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              type="text"
              onChange={e => setNewname(e.target.value)}
              value={newname}
            />
            <TextField
              label="Number"
              variant="outlined"
              type="text"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              onChange={e => setNewnumber(e.target.value)}
              value={newnumber}
            />
            <Button type="submit" variant="outlined" onClick={handler}>
              Edit contact
            </Button>
          </EditContactDiv>
        </>
      );
}

export const EditContactDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  max-width: 400px;
  height: auto;
  background-color: white;
  padding: 20px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const EditContactBlur = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.55);
  filter: blur(15px);
  z-index: 1000;
`;