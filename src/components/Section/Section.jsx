import { Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title }) => {
  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
