import React from 'react';

import HeaderLeft from './header-left/header-left';
import HeaderRight from './header-right/header-right';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <HeaderLeft />
      <HeaderRight />
    </header>
  )
}

export default Header;
