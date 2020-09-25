import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import withAuthService from '../../../../components/hoc/with-auth-service';
import { updateUserForm } from '../../../../store/actions/login-form-action';
import { loginUser } from '../../../../store/actions/user-action';
import LoginForm from './login-form';

function LoginFormContainer({ login, sublogin, password, onFieldUpdate, onSubmit }) {
  const creds = { login, sublogin, password };

  // TODO: try useSelector
  return (
    <LoginForm {...creds} onFieldChange={onFieldUpdate} onSubmit={onSubmit} />
  )
}

const mapStateToProps = ({ loginForm }) => ({
  login: loginForm.login,
  sublogin: loginForm.sublogin,
  password: loginForm.password
});

const mapDispatchToProps = (dispatch, { service }) => {
  return bindActionCreators({
    onFieldUpdate: updateUserForm,
    onSubmit: loginUser(service)
  }, dispatch);
};

export default compose(
  withAuthService,
  connect(mapStateToProps, mapDispatchToProps)
)(LoginFormContainer);
