import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../../../components/ui/heading/heading';
import BaseInput from '../../../../components/ui/base-input/base-input';
import BaseButton from '../../../../components/ui/base-button/base-button';
import ErrorBanner from './error-banner/error-banner';
import './login-form.scss';

function LoginForm({ login, sublogin, password, errorMessage, onFieldChange, onSubmit }) {
  const onChange = (field) => (value) => {
    onFieldChange(field, value);
  }

  const errorBanner = errorMessage
    ? <ErrorBanner title="Вход не вышел" response={errorMessage} />
    : null;

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <Heading />
      {errorBanner}
      <BaseInput
        title="Логин"
        value={login}
        onChanged={onChange('login')}
      />
      <BaseInput
        title="Сублогин"
        value={sublogin}
        isOptional={true}
        onChanged={onChange('sublogin')}
      />
      <BaseInput
        title="Пароль"
        value={password}
        type="password"
        onChanged={onChange('password')}
      />
      <BaseButton title="Войти" type="submit"/>
    </form>
  )
}

LoginForm.propTypes = {
  login: PropTypes.string,
  sublogin: PropTypes.string,
  password: PropTypes.string,
  errorMessage: PropTypes.string,
  onFieldChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default LoginForm;
