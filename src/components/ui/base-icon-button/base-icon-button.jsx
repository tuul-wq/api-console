import React from 'react';
import PropTypes from 'prop-types';

import './base-icon-button.scss';

function BaseIconButton({ title, img, alt, onClicked }) {
  let icon;
  if (img) {
    icon = require(`../../../assets/images/icons/${img}.svg`);
  }

  return (
    <button type="button" className="btn-icon" onClick={onClicked}>
      { title ? <span className="btn-icon__title">{title}</span> : null }
      {/* FIXME: */}
      { img ? <img className="btn-icon__image" src={icon} alt={alt}/> : null }

      {/* <img className="btn-icon__image" src={icon} alt={alt}/> */}
    </button>
  )
}

BaseIconButton.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default BaseIconButton;
