import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  rating: PropTypes.string,
  comment: PropTypes.string,
  date: PropTypes.instanceOf(Date),
},
);
