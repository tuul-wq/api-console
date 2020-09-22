import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './login-status.scss';

function LoginStatus({ email, name }) {
  return (
    <div className="login-status">
      <span className="login-status__text">{email}</span>
      <span className="login-status__separator">:</span>
      <span className="login-status__text">{name}</span>
    </div>
  )
}

LoginStatus.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

const mapStateToProps = ({ user }) => ({
  email: user.email,
  name: user.name
});

export default connect(mapStateToProps)(LoginStatus);
