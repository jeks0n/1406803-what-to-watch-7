import React from 'react';
import PropTypes from 'prop-types';

function ShowMoreButton(props) {
  const {onClickEvent} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClickEvent}>Show more</button>
    </div>
  );
}

ShowMoreButton.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
};

export default ShowMoreButton;
