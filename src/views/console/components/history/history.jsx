import React from 'react';

import HistoryTrack from '../../../../components/common/history-track/history-track';
import './history.scss';

function History() {
  return (
    <div className="history">
      <HistoryTrack title="test_1" success={true} />
      <HistoryTrack title="test_2" success={false} />
      <HistoryTrack title="test_3" success={true} />
      <HistoryTrack title="test_test_4" success={false} />
    </div>
  )
}

export default History;
