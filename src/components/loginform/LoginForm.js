import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import styled from 'styled-components';
import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email,
        password,
      })
    );
    setEmail('');
    setPassword('');
  };

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value);
  }
  return (
    <LogginForm onSubmit={handleSubmit} autoComplete="off">
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
        Log In
      </Button>
    </LogginForm>
  );
};

const LogginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
`;
