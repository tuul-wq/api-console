import React, { useState } from 'react';
import BaseIconButton from '../../../../../components/ui/base-icon-button/base-icon-button';
import LoginStatus from '../login-status/login-status';
import './header-right.scss';

function HeaderRight() {
  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (fullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setFullScreen(!fullScreen);
  }

  const iconName = fullScreen ? 'fullscreen-out' : 'fullscreen-in';

  return (
    <div className="header-right">
      <LoginStatus />
      <BaseIconButton title="Выйти" img="logout" onClicked={() => console.log('1')}/>
      <BaseIconButton img={iconName} onClicked={toggleFullScreen}/>
    </div>
  )
}

export default HeaderRight;
