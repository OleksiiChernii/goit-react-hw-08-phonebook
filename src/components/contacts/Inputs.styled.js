import styled from 'styled-components';
import IconAdd from '@mui/icons-material/Add';

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

export const IconAddStyled = styled(IconAdd)`
  color: white;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.54);
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
    color: rgba(0, 0, 0, 0.54);

    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;
