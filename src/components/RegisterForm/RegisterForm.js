import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };
    dispatch(register(user));
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleName = e => {
    setName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  
  return (
    <RegistrationForm onSubmit={handleSubmit} autoComplete="off">
      <TextField
        label="Username"
        variant="outlined"
        onChange={handleName}
        value={name}
      />
      <TextField
        label="Email"
        variant="outlined"
        onChange={handleEmail}
        value={email}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        onChange={handlePassword}
        value={password}
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </RegistrationForm>
  );
};

const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
`;
