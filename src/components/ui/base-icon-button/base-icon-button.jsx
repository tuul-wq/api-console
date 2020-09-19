import React from 'react';
import PropTypes from 'prop-types';

import './base-icon-button.scss';

function BaseIconButton({ title, onClicked }) {
  return (
    <button type="button" className="btn-icon" onClick={onClicked}>
      <span className="btn-icon__title">{title}</span>
    </button>
  )
}

BaseIconButton.propTypes = {
  title: PropTypes.string,
  onClicked: PropTypes.func.isRequired
};

export default BaseIconButton;
