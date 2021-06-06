import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Logo(props) {
  const {isFooter = false} = props;

  return (
    <div className="logo">
      <Link className={`logo__link ${isFooter && 'logo__link--light'}`} to="/">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

Logo.propTypes = {
  isFooter: PropTypes.bool,
};

export default Logo;
