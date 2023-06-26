import PropTypes from 'prop-types';
import { BsTelephone } from 'react-icons/bs';

import { Items, Link, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <Items>
      <Link href="tel:{number}">
        <BsTelephone />
      </Link>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Items>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
