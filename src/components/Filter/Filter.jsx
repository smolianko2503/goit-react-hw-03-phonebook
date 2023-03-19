import { FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onSearch }) => {
  return (
    <div>
      <label>Find Contacts by name</label>
      <FilterInput type="text" value={filter} onChange={onSearch} />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
