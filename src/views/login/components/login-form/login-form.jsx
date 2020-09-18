import React from 'react';

import Heading from '../../../../components/ui/heading/heading';
import BaseInput from '../../../../components/ui/base-input/base-input';
import BaseButton from '../../../../components/ui/base-button/base-button';
import './login-form.scss';

function LoginForm() {
  const submitForm = () => {
    console.log('submit');
  }

  return (
    <form className="login-form" onSubmit={submitForm}>
      <Heading />
      <BaseInput title="Логин" value={''} />
      <BaseInput title="Сублогин" value={''} isOptional={true} />
      <BaseInput title="Пароль" value={''} type="password" />
      <BaseButton title="Войти" />
    </form>
  )
}

export default LoginForm;
