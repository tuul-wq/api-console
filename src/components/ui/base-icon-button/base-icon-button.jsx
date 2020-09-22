import React from 'react';
import PropTypes from 'prop-types';

import './base-icon-button.scss';

function BaseIconButton({ title, img, alt, position, onClicked }) {
  const mask = { 'mask-image': `url(${require(`../../../assets/images/icons/${img}.svg`)})` }

  const btnTitle = title ? <span className="btn-icon__title">{title}</span> : null;
  const btnIcon = <i className="btn-icon__image" style={mask}/>;

  return (
    <button type="button" className="btn-icon" onClick={onClicked}>
      { position === 'left' ? <>{btnIcon}{btnTitle}</> : <>{btnTitle}{btnIcon}</> }
    </button>
  )
}

BaseIconButton.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['left', 'right']),
  onClicked: PropTypes.func.isRequired,
};

export default BaseIconButton;
