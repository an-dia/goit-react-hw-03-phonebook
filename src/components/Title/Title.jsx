import PropTypes from 'prop-types';

const Title = ({ title, level = 1 }) => {
  const TagNameTitle = `h${level}`;
  return <TagNameTitle>{title}</TagNameTitle>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default Title;
