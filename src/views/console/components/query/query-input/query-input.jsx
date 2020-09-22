import React from 'react';
import PropTypes from 'prop-types';

import './query-input.scss';

function QueryInput({ id, title, onChanged }) {
  // const valueChanged = (event) => onChanged(event.target.value);
  const valueChanged = (event) => console.log(event.target.value);

  return (
    <div id={id} className="query-input">
      <span className="query-input__title">{title}</span>
      <textarea className="query-input__area" onChange={valueChanged}>
        121212
      </textarea>
    </div>
  )
}

QueryInput.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default QueryInput;
