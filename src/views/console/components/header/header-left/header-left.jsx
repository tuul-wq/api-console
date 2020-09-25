import React from 'react';

import Logo from '../../../../../components/ui/logo/logo';
import Heading from '../../../../../components/ui/heading/heading';
import './header-left.scss';

function HeaderLeft() {
  return (
    <div className="header-left">
      <Logo />
      <Heading />
    </div>
  )
}

export default HeaderLeft;
