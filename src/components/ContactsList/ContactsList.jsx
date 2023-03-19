import { ContactItem } from '../ContactItem/ContactItem';
import { ContactList } from './ContactsList.styled';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, filter, onDelete }) => {
  return (
    <div>
      <ContactList>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <ContactItem key={contact.id} item={contact} onDelete={onDelete} />
          ))}
      </ContactList>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
