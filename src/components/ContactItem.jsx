import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <p>
        {name}: {number} <button onClick={handler}>delete</button>
      </p>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
