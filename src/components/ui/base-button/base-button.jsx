import React from 'react';
import PropTypes from 'prop-types';

import './base-button.scss';

function BaseButton({ title, type, isLoading, onClicked }) {
  const classes = `btn ${isLoading ? 'btn--loading' : ''}`;

  return (
    <button type={type || 'button'} className={classes} onClick={onClicked}>
      <span className="btn__title">{title}</span>
    </button>
  )
}

BaseButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  onClicked: PropTypes.func
};

export default BaseButton;
