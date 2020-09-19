import React from 'react';

import LoginStatus from '../../../../components/common/login-status/login-status';
import Logo from '../../../../components/common/logo/logo';
import BaseIconButton from '../../../../components/ui/base-icon-button/base-icon-button';
import Heading from '../../../../components/ui/heading/heading';
import './header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Logo />
        <Heading />
      </div>
      <div className="header__right">
        <LoginStatus />
        <BaseIconButton title="Full screen" />
      </div>
    </div>
  )
}

export default Header;
