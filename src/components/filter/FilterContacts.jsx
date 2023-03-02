import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import SearchIcon from '@mui/icons-material/Search';
import {
  FilterContactsStyled,
  FilterIconWrapper,
  StyledInputBase,
} from './FilterContacts.styled';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filterHandler = query => {
    dispatch(setFilter(query));
  };

  return (
    <FilterContactsStyled>
      <FilterIconWrapper>
        <SearchIcon />
      </FilterIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onInput={e => filterHandler(e.target.value)}
      />
    </FilterContactsStyled>
  );
};
