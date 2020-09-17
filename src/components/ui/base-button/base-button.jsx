import React from 'react';
import PropTypes from 'prop-types';

import './base-button.scss';

function BaseButton({ title, isLoading, onClicked }) {
  const classes = `btn ${isLoading ? 'btn--loading' : ''}`;

  return (
    <button type="button" className={classes} onClick={onClicked}>
      {title}
    </button>
  )
}

BaseButton.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  onClicked: PropTypes.func.isRequired
};

export default BaseButton;
