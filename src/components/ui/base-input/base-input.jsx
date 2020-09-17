import React from 'react';
import PropTypes from 'prop-types';

import './base-input.scss';

// TODO: handle hasError
// TODO: input-row__title--optional - add text with ::after
function BaseInput({ title, isOptional, onChanged }) {
  const titleClasses = `input-row__title ${isOptional ? 'input-row__title--optional' : ''}`;

  return (
    <label className="input-row">
      <span className={titleClasses}>{title}</span>
      <input className="input-row__input" type="text" value={1} onChange={onChanged}/>
    </label>
  )
}

BaseInput.propTypes = {
  title: PropTypes.string.isRequired,
  isOptional: PropTypes.bool,
  onChanged: PropTypes.func.isRequired
};

export default BaseInput;
