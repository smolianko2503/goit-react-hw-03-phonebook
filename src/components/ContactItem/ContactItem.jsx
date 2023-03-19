import { List, ButtonDelete } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ item: { name, number, id }, onDelete }) => {
  return (
    <div>
      <List>
        {name}: {number}
        <ButtonDelete type="button" onClick={() => onDelete(id)}>
          Delete
        </ButtonDelete>
      </List>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
