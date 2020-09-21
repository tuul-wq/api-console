import React from 'react';
import { connect } from 'react-redux';

import HistoryTrack from '../history-track/history-track';
import './history-list.scss';

function HistoryList({ historyTracks }) {
  return (
    <ul className="history-list">
      {
        historyTracks.map(({ id, ...item }) =>
          <li className="history-list__item" key={id}>
            <HistoryTrack title={item.title} success={item.success}/>
          </li>
        )
      }
    </ul>
  )
}

const mapStateToProps = ({ console }) => ({
  historyTracks: console.historyTracks
});

export default connect(mapStateToProps, null)(HistoryList);
