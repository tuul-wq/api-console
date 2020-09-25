import React from 'react';

import BaseButton from '../../../../components/ui/base-button/base-button';
import RepoLink from '../../../../components/ui/repo-link/repo-link';
import BaseIconButton from '../../../../components/ui/base-icon-button/base-icon-button';
import './actions.scss';

function Actions() {
  return (
    <footer className="actions">
      <BaseButton title="Отправить" />
      <RepoLink />
      <BaseIconButton
        title="Форматировать"
        img="format"
        position="left"
        onClicked={() => console.log('format')}
      />
    </footer>
  )
}

export default Actions;
