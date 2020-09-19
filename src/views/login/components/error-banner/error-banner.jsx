import React from 'react';
import PropTypes from 'prop-types';

import './error-banner.scss';

function ErrorBanner({ title, response }) {
  return (
    <div className="error-banner">
      <div className="error-banner__title">{title}</div>
      <span className="error-banner__response">{response}</span>
    </div>
  )
}

ErrorBanner.propTypes = {
  title: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired
}

export default ErrorBanner;
