import React from 'react';
import classes from './loading-screen.module.css';
import PropTypes from 'prop-types';

function LoadingScreen({isAbsolutePosition}) {
  const loader = isAbsolutePosition ?
    <div style={{position: 'absolute'}} className={classes.loader}></div>
    :<div className={classes.loader}></div>;

  return loader;
}

LoadingScreen.propTypes = {
  isAbsolutePosition: PropTypes.bool,
};

export default LoadingScreen;
