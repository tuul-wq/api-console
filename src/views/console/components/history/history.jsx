import React from 'react';

import BaseIconButton from '../../../../components/ui/base-icon-button/base-icon-button';
import HistoryList from './history-list/history-list';
import './history.scss';

function History() {
  return (
    <div className="history">
      <HistoryList />
      <BaseIconButton />
    </div>
  )
}

export default History;
