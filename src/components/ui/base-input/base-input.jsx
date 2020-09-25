import React from 'react';
import PropTypes from 'prop-types';

import './base-input.scss';

function BaseInput({ title, value, type, hasError, isOptional, onChanged }) {
  console.log('BaseInput -> value', value);
  const rowClasses = `input-row ${hasError ? 'input-row--error' : ''}`;
  const titleClasses = `input-row__title ${isOptional ? 'input-row__title--optional' : ''}`;
  const inputType = type || 'text';

  const valueChanged = (event) => onChanged(event.target.value);

  return (
    <label className={rowClasses}>
      <span className={titleClasses}>{title}</span>
      <input
        className="input-row__input"
        autoComplete="off"
        type={inputType}
        value={value}
        onChange={valueChanged}
      />
    </label>
  )
}

BaseInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'number']),
  hasError: PropTypes.bool,
  isOptional: PropTypes.bool,
  onChanged: PropTypes.func.isRequired
};

export default BaseInput;
