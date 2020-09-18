import React from 'react';
import PropTypes from 'prop-types';

import './base-input.scss';

// TODO: handle hasError
// TODO: input-row__title--optional - add text with ::after
function BaseInput({ title, value, type, isOptional, onChanged }) {
  const titleClasses = `input-row__title ${isOptional ? 'input-row__title--optional' : ''}`;
  const inputType = type || 'text';

  const valueChanged = (event) => onChanged(event.target.value);

  return (
    <label className="input-row">
      <span className={titleClasses}>{title}</span>
      <input
        className="input-row__input"
        type={inputType}
        value={value}
        onChange={valueChanged}
      />
    </label>
  )
}

BaseInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'number']),
  isOptional: PropTypes.bool,
  onChanged: PropTypes.func.isRequired
};

export default BaseInput;
