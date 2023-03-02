import styled from 'styled-components';

export const CreateContactForm = styled.form`
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

export const CreateContactBlur = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.55);
  filter: blur(15px);
  z-index: 1000;
`;